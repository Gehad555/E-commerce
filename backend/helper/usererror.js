module.exports=({statedcode=500, code, message})=> {
    const error = new Error(message);
    error.statusCode = statedcode;
    error.code = code;
   return error;
}