/**
* Sample #2
* 1. Launch a new Chrome browser.
* 2. Open http://www.ibeta.com/
* 3. Use this statement to click on the "Leadership Team" link
* 4. Close the browser using close() command
*/

@Test
public void Sample2() {
    WebDriver myDriver = new ChromeDriver();
    myDriver.get("http://www.ibeta.com/");
    myDriver.findElement(By.xpath(".//*[@id='menu-item-5426']/a")).click();
    String title = myDriver.getTitle();
    System.out.println("Page \"" + title + "\" was opened.");

    // Go back to Home Page
    myDriver.navigate().back();

    // Go forward to Leadership Team page
    myDriver.navigate().forward();

    // Go back to Home page
    String bioUrl = "https://www.biometricupdate.com/201808/perfect-score-for-facetec-facial-authentication-software-in-ibeta-presentation-attack-certification";
    myDriver.navigate().to(bioUrl);
    String bioTitle = myDriver.getTitle();
    System.out.println("Page \"" + bioTitle + "\" was opened.");

    // Refresh browser
    myDriver.navigate().refresh();

    myDriver.close();
}
