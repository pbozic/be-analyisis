const fs = require('fs');
const path = require('path');

function generateRoutesMap(apiPath, routesPath, workspacePath, outputFilePath) {
    const routesMap = buildRoutesMap(apiPath, routesPath, workspacePath);
    fs.writeFileSync(outputFilePath, JSON.stringify(routesMap, null, 2));
    console.log(`Routes map saved to ${outputFilePath}`);
}

function buildRoutesMap(apiPath, routesPath, workspacePath, basePath = '', auth = false) {
    const routesMap = [];
    if (fs.existsSync(apiPath)) {
        console.log(`Processing file: ${apiPath}`);
        const content = fs.readFileSync(apiPath, 'utf8');
        const lines = content.split('\n');
        const requireMap = buildRequireMap(content, path.dirname(apiPath));

        lines.forEach((line, index) => {
            const useMatch = line.match(/router\.use\(['"`](.*?)['"`],\s*(\[.*?\])?,\s*(.*?)\)/);
            if (useMatch) {
                const nestedBasePath = path.join(basePath, useMatch[1]);
                const middlewares = useMatch[2] ? extractMiddlewares(useMatch[2]) : [];
                const nestedAuth = auth || middlewares.includes('authMiddleware');
                const nestedRouterName = useMatch[3].replace(/['"`]/g, '');
                const nestedRouterPath = requireMap[nestedRouterName];
                console.log(`Found nested router: ${nestedRouterName} at ${nestedRouterPath}`);
                const nestedRoutesMap = buildRoutesMap(nestedRouterPath, routesPath, workspacePath, nestedBasePath, nestedAuth);
                routesMap.push(...nestedRoutesMap);
            }

            const routeMatch = line.match(/router\.(get|post|put|delete|patch)\(['"`](.*?)['"`],\s*(.*?)\)/);
            if (routeMatch) {
                const method = routeMatch[1];
                const routePath = path.join(basePath, routeMatch[2]);
                const controllerCall = routeMatch[3];
                const [controllerName, functionName] = controllerCall.split('.');
                const controllerPath = requireMap[controllerName];
                const functionLine = findFunctionLine(controllerPath, functionName);

                const isDocumented = checkIfDocumented(controllerPath, functionName);

                console.log(`Found route: ${method.toUpperCase()} ${routePath} -> ${controllerName}.${functionName} at ${controllerPath}:${functionLine}, documented: ${isDocumented}`);

                routesMap.push({
                    path: routePath,
                    method: method,
                    controller: controllerPath,
                    function: functionName,
                    line: functionLine,
                    auth: auth,
                    documented: isDocumented
                });
            }
        });
    }
    return routesMap;
}

function buildRequireMap(content, basePath) {
    const requireMap = {};
    const requireRegex = /const\s+(\w+)\s*=\s*require\(['"`](.*?)['"`]\)/g;
    let match;
    while ((match = requireRegex.exec(content)) !== null) {
        const controllerName = match[1];
        let controllerPath = path.resolve(basePath, match[2]);
        if (fs.existsSync(controllerPath) && fs.statSync(controllerPath).isDirectory()) {
            controllerPath += '.js';
        } else if (!fs.existsSync(controllerPath)) {
            controllerPath += '.js';
        }
        requireMap[controllerName] = controllerPath;
        console.log(`Mapped require: ${controllerName} -> ${controllerPath}`);
    }
    return requireMap;
}

function extractMiddlewares(middlewareString) {
    const regex = /(\w+)/g;
    const middlewares = [];
    let match;
    while ((match = regex.exec(middlewareString)) !== null) {
        middlewares.push(match[1]);
    }
    return middlewares;
}

function findFunctionLine(controllerPath, functionName) {
    if (fs.existsSync(controllerPath)) {
        const content = fs.readFileSync(controllerPath, 'utf8');
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(`function ${functionName}`)) {
                return i + 1;
            }
        }
    }
    return -1;
}

function checkIfDocumented(controllerPath, functionName) {
    if (fs.existsSync(controllerPath)) {
        const content = fs.readFileSync(controllerPath, 'utf8');
        const lines = content.split('\n');
        const functionLine = findFunctionLine(controllerPath, functionName);
        for (let i = functionLine - 2; i >= 0; i--) {
            if (lines[i].includes('/**')) {
                return true;
            }
            if (lines[i].trim() === '') {
                continue;
            }
            break;
        }
    }
    return false;
}

const workspacePath = process.cwd();
const routesPath = path.join(workspacePath, 'routes');
const apiPath = path.join(routesPath, 'api.js');
const outputFilePath = path.join(__dirname, 'routesMap.json');

generateRoutesMap(apiPath, routesPath, workspacePath, outputFilePath);