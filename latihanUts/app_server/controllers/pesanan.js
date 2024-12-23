const mongoose = require("mongoose");
const Pesanan = mongoose.model("Pesanan");

//untuk menghandle request get all pesanan
const index = (req, res, next) => {
    Pesanan.find({}, { __v: 0 })
      .then((psn) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: psn
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert pesanan
const insert = (req, res, next) => {
    const psn = new Pesanan({
      pengguna_id: req.body.pengguna_id,
      produk_id: req.body.produk_id,
      jumlah: req.body.jumlah,
      status: req.body.status,
      tanggal_pesanan: req.body.tanggal_pesanan,
      aktif: true
    });
  
    psn
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

//untuk menghandle request update pesanan
const update = (req, res, next) => {
     Mahasiswa
       .findByIdAndUpdate(req.params.id,{
            nama: req.body.nama,
            npm: req.body.npm,
            email: req.body.email,
            tanggal_lahir: req.body.tanggal_lahir,
         })
        .then((result) => {
            Mahasiswa
            .findById(req.params.id)
            .then((mhs) =>{
                const responseMessage = {
                    code: 200,
                    success: true,
                    message: "Successfull",
                    data: mhs
                };
                res.status(200).json(responseMessage);
            });        
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};

//untuk menghandle request show detail
const show = (req, res, next) => {
    Mahasiswa
        .findById(req.params.id)
        .then((mhs) =>{
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: todo
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
            };
            res.status(404).json(responseMessage);
        });
};


//untuk menghandle request delete
const destroy = (req, res, next) => {
    Mahasiswa
        .findByIdAndDelete(req.params.id)
        .then((mhs) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
            };
            res.status(200).json(responseMessage);
        });
        /*.catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });*/
};

module.exports = {
    index, insert, update, show, destroy
}

