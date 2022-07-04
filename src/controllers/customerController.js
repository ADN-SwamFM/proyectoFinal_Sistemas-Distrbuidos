const controller = {};

controller.list = (req,res)=>{
    //Controlador que se encarga de mandar una respuesta
    //al servidor
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM medicamento',(err,customers) => {
            if(err){
                res.json(err);
            }
            
            //console.log(customers);
            res.render('customers',{
                data: customers
            });
        });
    });
};
controller.enviar = (req, res) =>{
    //Datos que vienen del formulario
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO medicamento set ?', [data], (err, medicamento) =>{
            res.redirect('/');
        });
    });

};

controller.delete = (req, res) =>{
    
    //A travez del parametro es como obtenemos el id
    const {idMedicamento} = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM medicamento WHERE idMedicamento = ?', [idMedicamento], (err, rows) => {
            res.redirect('/');
        });
    });

};

controller.edit = (req, res) =>{
     //A travez del parametro es como obtenemos el id
     const {idMedicamento} = req.params;

     req.getConnection((err, conn) => {
        conn.query('SELECT * FROM medicamento WHERE idMedicamento = ?', [idMedicamento], (err, medicamento) =>{
            res.render('customer_edit' , {
                data:medicamento[0]
            });
        });
     });
};

controller.update = (req, res) =>{
    const {idMedicamento} = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE medicamento set ? WHERE idMedicamento = ?', [newCustomer, idMedicamento], (err, rows) =>{
            res.redirect('/');
        });
    });
};

module.exports = controller;