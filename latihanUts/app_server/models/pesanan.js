let mongoose = require("mongoose");

let schemaPsn = new mongoose.Schema({
    pengguna_id: {
        type: String,
        require: true,
    },
    produk_id: {
        type: Number,
        require: true,
    },
    jumlah: {
        type: Number,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    tanggal_pesanan: {
        type: Date,
        require: true,
    },
    aktif: Boolean,
});
//create model form Schema
mongoose.model("Pesanan", schemaPsn);