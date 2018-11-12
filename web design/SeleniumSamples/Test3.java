/** 
* Sample #3
* 1. Launch a new Chrome browser.
* 2. Open URL https://www.ibeta.com/contact-us/subscribe/
* 3. Type First Name, Last Name, and Email (Use Name locator)
* 4. Click on Submit button (Use ID locator)
*/

@Test
public void Sample3() {
    // Create a new instance of the Chrome driver
    WebDriver myDriver = new ChromeDriver();

    // Launch the iBeta Subscribe page
    myDriver.get("https://www.ibeta.com/contact-us/subscribe/");

    // Type Name in the FirstName text box      
    myDriver.findElement(By.name("input_1")).sendKeys("Paul");

    //Type LastName in the LastName text box
    myDriver.findElement(By.name("input_2")).sendKeys("Barden");

    //Type Email in the Email text box
    myDriver.findElement(By.name("input_4")).sendKeys("pbarden@ibeta.com");

    // Click on the Submit button
    myDriver.findElement(By.id("gform_submit_button_8")).click();
}
