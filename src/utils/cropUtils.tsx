  // from stackoverflow
  export const dataURLtoFile = (dataurl:string, filename:string) => {
    let arr = dataurl.split(','),
      mime = arr?.[0].match?.(/:(.*?);/)?.[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  export const readFile = (file:File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }