const { remote } = require('electron');
const { dialog } = remote;

function onClick_OpenFile() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({
        properties: ['openFile'],
        title: '打开文件',
        message: '打开我的文件',
        buttonLabel: '选择文件',
        defaultPath: 'E:\\repo\\GitChat-CodePractice'
    })
};

function onClick_FileType() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({
        properties: ['openFile'],
        title: '打开文件',
        message: '打开我的文件',
        buttonLabel: '选择文件',
        defaultPath: 'E:\\repo\\GitChat-CodePractice',
        filters: [
            {
                name: '图像文件', extensions: ['jpg', 'png', 'gif']
            },
            {
                name: '视频文件', extensions: ['avi', 'mp4', 'mkv']
            },
            {
                name: '音频文件', extensions: ['wav', 'mp3']
            },
            {
                name: '所有文件', extensions: ['*']
            }
        ]
    })
};

function onClick_OpenAndCreateDirectory() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({
        properties: ['openDirectory', 'createDirectory'],
        title: '打开目录'
    })
};

function onClick_MultiSelection() {
    const label = document.getElementById('label');
    label.innerText = dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory', 'multiSelections'],
        title: '选择多个文件和目录',
        message: '选择多个文件和目录',
    });
};