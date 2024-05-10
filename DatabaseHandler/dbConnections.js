const {pool} = require("../pool/pool");
const prisma = require("../prisma/prisma");

pool.on('connect', () => {
    console.log('successfully connected to the DB..');
});

/* USER prisma queries */
const getUsers = async () => {
    return prisma.users.findMany();
};

const getUserById = async (user_id) => {
    return prisma.users.findUnique({
        where: {
            user_id: user_id,
        },
    });
};

const getUserByEmail = async (email) => {
    return prisma.users.findUnique({
        where: {
            email: email,
        },
    });
};

const getUser = async (email) => {
    const query = `SELECT * 
                    FROM public.users
                    WHERE email = $1`;

    return await pool.query(query, [email]);
};


const updateUser = async (user_id, full_name, email, tel) => {
    const query = `UPDATE public.users
                    SET full_name = $2, email = $3, tel = $4
                    WHERE user_id = $1
                    RETURNING *;`;

    return await pool.query(query, [user_id, full_name, email, tel]);
};

const updateEmail = async (user_id, full_name) => {
    const query = `UPDATE public.users
                    SET full_name = $2
                    WHERE user_id = $1
                    RETURNING *;`;

    return await pool.query(query, [user_id, full_name]);
};


const updateUserPassword = async (user_id, password) => {
    const query = `UPDATE public.users
                    SET password = $2
                    WHERE user_id = $1
                    RETURNING *;`;

    return await pool.query(query, [user_id, password]);
};

const updateUserTelephone = async (user_id, tel) => {
    const query = `UPDATE public.users
                    SET tel = $2
                    WHERE user_id = $1
                    RETURNING *;`;

    return await pool.query(query, [user_id, tel]);
};

const updateUserType = async (user_id, user_role) => {
    const query = `UPDATE public.users
                    SET type = $2
                    WHERE user_id = $1
                    RETURNING *;`;

    return await pool.query(query, [user_id, user_role]);
};

const createNewUser = async (fullName, email, password, tel, user_role) => {
    const query = `
        INSERT INTO public.users(full_name, email, password, tel, user_role)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;`;

    return await pool.query(query, [fullName, email, password, user_role || null, tel]);
};

/* RESET PASSWORD REQUEST */

const createNewResetRequest = async (user_id) => {
    const query = `
        INSERT INTO public.reset_requests(user_id)
        VALUES ($1)
        RETURNING *;`;

    return await pool.query(query, [user_id]);
};

const getResetRequest = async (reset_request_id) => {
    const query = `SELECT * 
                    FROM public.reset_requests
                    WHERE reset_request_id = $1
                    AND active = TRUE`;

    return await pool.query(query, [reset_request_id]);
};

const expireResetRequest = async (reset_request_id) => {
    const query = `UPDATE public.reset_requests
                    SET active = $2
                    WHERE reset_request_id = $1
                    RETURNING *;`;

    return await pool.query(query, [reset_request_id, false]);
};

const getAllActiveResetRequestsOlderThan30Min = async () => {
    const query = `SELECT *
                 FROM public.reset_requests
                 WHERE date_create < (CURRENT_TIMESTAMP - INTERVAL '30 minutes')
                 AND active = TRUE`;

    return await pool.query(query, []);
};


/* FILES */


const getAllFiles = async () => {
    const query = `SELECT f.*
                    FROM public.files f
                    ORDER BY f.path ASC`;

    return await pool.query(query);
};

const getFiles = async (path) => {
    const query = `SELECT f.*
                    FROM public.files f
                    WHERE path = $1
                    ORDER BY f.name ASC`;

    return await pool.query(query, [path]);
};

const getFileById = async (file_id) => {
    const query = `SELECT dir.*
                    FROM public.files dir
                    WHERE file_id = $1`;

    return await pool.query(query, [file_id]);
};

const getFile = async (path) => {
    const query = `SELECT dir.*
                    FROM public.files dir
                    WHERE path = $1`;

    return await pool.query(query, [path]);
};

const createNewFile = async (folder_id, name, path, mime_type, user_groups) => {
    const query = `INSERT INTO public.files(folder_id, name, path, mime_type, user_groups)
                            VALUES ($1, $2, $3, $4, $5)
                            RETURNING *`;

    return await pool.query(query, [folder_id, name, path, mime_type, user_groups]);
};


module.exports = {
    getResetRequest,
    expireResetRequest,
    getAllActiveResetRequestsOlderThan30Min,
    createNewResetRequest,
    createNewFile,
    getFiles,
    getAllFiles,
    getFileById,
    getFile,
    getUsers,
    getUser,
    getUserById,
    updateUserTelephone,
    updateUserType,
    updateUser,
    updateEmail,
    updateUserPassword,
    createNewUser,
};

//require('make-runnable');
