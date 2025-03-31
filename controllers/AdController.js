// Obsolete

const AdDao = require('../dao/Ad');
const UserDao = require('../dao/User');
const BussinesUserDao = require('../dao/BusinessUsers');
const BusinessDao = require('../dao/Business');
const prisma = require('../prisma/prisma');
const moment = require('moment');
async function listAds(req, res) {
    try {
        const ads = await AdDao.listAds();
        res.json(ads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAd(req, res) {
    try {
        const ad = await AdDao.findAdById(req.params.ad_id);
        res.json(ad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createAd(req, res) {
    /*
        {
            title: "Title",
            description: "Description",
            image: "base64",
            business_id: GET FROM USER,
            user_id: GET FROM RRQUEST,
            categories: ["category1", "category2"],
            schedule: {
               check working_hours
            },
            start_at: "2021-01-01T00:00:00.000Z",
            end_at: "2021-01-01T00:00:00.000Z",
            type: "type",
            actions: depend on type,

        }
    */
    try {
        let reqParams = req.body;
        let adObject = {};
        adObject.user_id = req.user.user_id;
        const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.params.user_id);
        adObject.business_id = businessUser.business_id;

        adObject.title = reqParams.title;
        adObject.description = reqParams.description;

        //TODO: save image to s3 and get the url

        adObject.image = reqParams.image;
        adObject.categories = reqParams.categories;
        //TODO: check schedule or if we even have it
        adObject.schedule = reqParams.schedule;
        // TODO: check date formating
        adObject.start_at = moment(reqParams.start_at).format();
        adObject.end_at = moment(reqParams.end_at).format();

        adObject.type = reqParams.type;
        let action = {
            type: "",
            data: {}
        }
        if (reqParams.type === "URL") {
            action.type = "EXTERNAL_REDIRECT";
            action.data.url = reqParams.url;
        }

        if (reqParams.type === "RESTAURANT") {
            action.type = "REDIRECT";
            action.data.bussiness_id = businessUser.business_id;
        }

        if (reqParams.type === "STORE") {
            action.type = "REDIRECT";
            action.data.bussiness_id = businessUser.business_id;
        }

        adObject.actions = action;


        const ad = await AdDao.createAd(adObject);
        res.json(ad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function editAd(req, res) {
    try {
        const ad = await AdDao.editAd(req.params.ad_id, req.body);
        res.json(ad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteAd(req, res) {
    try {
        const ad = await AdDao.deleteAd(req.params.ad_id);
        res.json(ad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function activateAd(req, res) {
    try {
        const ad = await AdDao.activateAd(req.params.ad_id);
        res.json(ad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deactivateAd(req, res) {
    try {
        const ad = await AdDao.deactivateAd(req.params.ad_id);
        res.json(ad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAdsByUserId(req, res) {
    try {
        const ads = await AdDao.findAdsByUserId(req.params.user_id);
        res.json(ads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAdsByBusinessId(req, res) {
    try {
        const ads = await AdDao.findAdsByBusinessId(req.params.business_id);
        res.json(ads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAdsByCategory(req, res) {
    try {
        const ads = await AdDao.findAdsByCategory(req.body.categories);
        res.json(ads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listActiveAds(req, res) {
    try {
        const ads = await AdDao.listActiveAds();
        res.json(ads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    listAds,
    getAd,
    createAd,
    editAd,
    deleteAd,
    activateAd,
    deactivateAd,
    getAdsByUserId,
    getAdsByBusinessId,
    getAdsByCategory,
    listActiveAds,
};