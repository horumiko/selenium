const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver")

async function viewing_empty_cart_case(){
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.manage().setTimeouts( { implicit: 10000 } )

    //send driver to website
    await driver.get("https://www.trussardi.com/en/it");

    await driver.findElement(By.id("onetrust-accept-btn-handler")).click();

    await driver.findElement(By.className("minicart-style-header")).click();

    if(await driver.getTitle() === "Cart"
        && await driver.findElement(By.className("continue-shopping-link")).isDisplayed()){
        console.log("Test done!");
    }

    driver.quit();
}

viewing_empty_cart_case();