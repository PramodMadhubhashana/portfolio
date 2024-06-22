const mega = require('megajs');
const folderLink = 'https://mega.nz/folder/K7IAiTgS#XSdK5-3nx-XlCn6yMUT7UA';

async function fetchMegaProjects() {
  const storage = mega.Storage.fromURL(folderLink);
  const projects = [];

  await new Promise((resolve, reject) => {
    storage.on('ready', () => {
      storage.files.forEach((file) => {
        if (file.directory) {
          const project = {
            name: file.name,
            data: null,
            imageUrl: null,
          };

          file.children.forEach((child) => {
            if (child.name === 'data.json') {
              child.downloadBuffer().then((buffer) => {
                project.data = JSON.parse(buffer.toString());
              });
            } else if (child.name.match(/\.(jpg|jpeg|png|gif)$/)) {
              project.imageUrl = child.downloadLink();
            }
          });

          projects.push(project);
        }
      });

      resolve();
    });

    storage.on('error', (err) => {
      reject(err);
    });
  });

  return projects;
}

module.exports = fetchMegaProjects;