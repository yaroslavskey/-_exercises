const DemoService = require('./service');

async function OriginDestination(req, res) {
    try {

        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const superType = req.body.superType;

        const demo = await DemoService.findOriginDestination(superType, startDate, endDate);

        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function Destination(req, res) {
    try {

        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const type = req.body.type;
        
        const demo = await DemoService.findDestination(type, startDate, endDate);

        return res.status(201).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function Origin(req, res) {
    try {

        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const type = req.body.type;
        
        const demo = await DemoService.findOrigin(type, startDate, endDate);

        return res.status(201).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    OriginDestination,
    Destination,
    Origin,
};




