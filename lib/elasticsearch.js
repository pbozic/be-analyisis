import elasticsearch from '../elasticsearch/index.js';
const { businessIndex, businessSearch, menusIndex, fullSearch } = elasticsearch;
/**
 * One-off indexing helper: reindexes businesses (and optionally menus) into Elasticsearch.
 * Intended to be executed as a script.
 * @returns {Promise<void>}
 */
async function run() {
	await businessIndex(null, true);
	//await menusIndex();
	// let result = await fullSearch("", 46.063655, 14.524589, [], null);
	//c//onsole.log(result);
}
run();
