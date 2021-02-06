const getFile = async () => {
  const [handle] = await window.showOpenFilePicker();
  const file = await handle.getFile();
  console.log(file);
};

const saveFile = async () => {
  const file = new File(["hello world"], "hello.txt", {
    type: "text/plain",
  });
  const handle = await window.showSaveFilePicker();
  const writable = await handle.createWritable();
  await writable.write(file);
};
