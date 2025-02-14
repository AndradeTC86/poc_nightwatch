module.exports = {  
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],
  webdriver: {
    start_process: true,
    server_path: require("chromedriver").path,
    port: 9515
  },
  test_settings: {
    default: {      
      desiredCapabilities: {
        browserName : "chrome",
        chromeOptions:{
          args: ["--no-sandbox", "--disable-gpu"]
        }
      },
    },
  },
}