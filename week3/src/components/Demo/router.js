const { Router } = require('express');
const DemoComponent = require('./index');

const router = Router();

router.get('/1', DemoComponent.OriginDestination);
router.get('/2', DemoComponent.Destination);
router.get('/3', DemoComponent.Origin);



module.exports = router;
