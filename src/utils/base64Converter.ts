const base64Converter = (file: File) => new Promise((responce, reject) => {
  const FR = new FileReader();
  FR.readAsDataURL(file);
  FR.onload = () => {
    responce(FR.result);
  };
  FR.onerror = (error) => {
    reject(error);
  };
});

export default base64Converter;
