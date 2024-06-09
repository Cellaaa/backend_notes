import { query } from '../database/db.js'

export const getNotes = async(req,res)=>{
    try{
        const result = await query('select * from notes')
        return res.status(200).json({ sucess:true, data:result })
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({ msg:"terjadi kesalahan pada server" })
    }
}

export const insertNotes = async(req,res)=>{
    const {title, datetime, note} = req.body
    try{
        await query("INSERT INTO notes(title,datetime,note) values (?, ?, ?)",[title,datetime,note])
        return res.status(200).json({msg:'note ditambahkan'})
    }catch(error){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({ msg:"terjadi kesalahan pada server" })
    }
}

export const updateNotes = async(req,res)=>{
    const {title, datetime, note} = req.body
    const {id}=req.params
    try{
        await query("UPDATE notes SET title=?, datetime=?, note=? where id=?",[title, datetime, note,id])
        return res.status(200).json({msg:'note diubah'})
    }catch(error){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({ msg:"terjadi kesalahan pada server" })
    }
}

export const deleteNotes = async(req,res)=>{
    const {id}=req.params
    try{
        await query("DELETE from notes where id=?",[id])
        return res.status(200).json({msg:'note dihapus'})
    }catch(error){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({ msg:"terjadi kesalahan pada server" })
    }
}