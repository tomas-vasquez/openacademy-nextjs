export const cropToProfilePic = (file, _callback) => {
    //vemos si la imagen seleccionada es v{alida}

    if (typeof file !== "undefined") {
      if (file.size <= 41943040) {
        // imagenes max 5mb

        var image = new Image(); //creamos un objeto dom para pintar la imagen seleccionada

        image.onload = () => {
          var canvas = document.createElement("CANVAS");

          var width = image.width;
          var height = image.height;
          var axis_x = 0;
          var axis_y = 0;

          if (width > height) {
            width = (180 * width) / height;
            height = 180;
            axis_x = ((width - 180) / 2) * -1;
          }
          if (height > width) {
            height = (180 * height) / width;
            width = 180;
            axis_y = ((height - 180) / 2) * -1;
          }
          if (height === width) {
            height = 180;
            width = 180;
          }
          canvas.width = 180;
          canvas.height = 180;
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, width, height); //for png background
          ctx.drawImage(image, axis_x, axis_y, width, height);

          canvas.toBlob((blob) => {
            _callback(blob);
            //   this.unsafeUploadPic(blob);
          }, "image/jpeg");
        };
        image.src = URL.createObjectURL(file);
      } else {
        this.alerts.showAlert("Imagen demasiado grande...");
      }
    }
  }


  export const cropImage = (img,max, _callBack) => {//vemos si la imagen seleccionada es v{alida}

    if (typeof img !== "undefined") {

      if (img.size <= 41943040) {// imagenes max 5mb

        var image = new Image();//creamos un objeto dom para pintar la imagen seleccionada

        image.onload = () => {

          var canvas = document.createElement("CANVAS");

          var width = image.width;
          var height = image.height;

          if (width > height) {
            if (width > max) {

              height = (max * height) / width;
              width = max;
            }
          } else if (height > width) {
            if (height > max) {
              width = (max * height) / width;
              height = max
            }
          } else if (height === width) {
            height = max;
            width = max;
          }
          canvas.width = width;
          canvas.height = height;

          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, width, height);//for png background
          ctx.drawImage(image, 0, 0, width, height);

          canvas.toBlob(blob => { _callBack(blob) }, 'image/jpeg');
        }
        image.src = URL.createObjectURL(img);

      } else {
        this.alerts.showAlert('Imagen demasiado grande...');
      }
    }
  }
