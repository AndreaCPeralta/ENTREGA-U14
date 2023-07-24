const {Router} = express.Router()
const router = Router ();

const {
	getreg,
	addreg,
	updatereg,
	deletereg
} = require('../c/conrut');

router.get('/', (req, res) => {
res.render(' index.ejs')
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry');
  });

router.post('/new-entry', (req, res) => {

    const { nombre, apellido, cedula, especialidad, consultorio, correo } = req.body;
  
    if (!nombre || !apellido || !cedula || !especialidad || !consultorio || !correo) {
      res.status(400).send("Entries must have a text");
      return;
    }

    var newreg = {
        nombre,
        apellido,
        cedula,
        especialidad,
        consultorio,
        correo
 };

 register.push(newreg);


 res.redirect('/');
});

router.route('/')
	.get(getProducts)
	.post(addProduct)
	.put(updateProduct)
	.delete(deleteProduct)

module.exports = router;