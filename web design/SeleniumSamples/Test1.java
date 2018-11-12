/** 
* Sample #1
* 1. Launch a new Chrome browser.
* 2. Open http://www.iBeta.com
* 3. Get Page Title name and Title length
* 4. Print Page Title and Title length on the IntelliJ Console.
* 5. Get Page URL and verify if the it is a correct page opened
* 6. Get Page Source (HTML Source code) and Page Source length
* 7. Print Page Length on IntelliJ Console.
* 8. Close the Browser.
*/

@Test
public void Sample1() {
    // Create a new instance of the Chrome driver
    WebDriver myDriver= new ChromeDriver();

    // Storing the Application Url in the String variable
    String url = "http://www.iBeta.com";

    //Launch the iBeta Website
    myDriver.get(url);

    // Storing Title name in the String variable
    String title = myDriver.getTitle();

    // Storing Title length in the Int variable
    int titleLength = myDriver.getTitle().length();

    // Printing Title & Title length in the Console window
    System.out.println("Title of the page is : " + title);
    System.out.println("Length of the title is : "+ titleLength);

    // Storing URL in String variable
    String actualUrl = myDriver.getCurrentUrl();

    if (actualUrl.equals(url)){
        System.out.println("Verification Successful - The correct Url is opened.");
    }else{
        System.out.println("Verification Failed - An incorrect Url is opened.");
        //In case of Fail, you like to print the actual and expected URL 	for the record purpose
        System.out.println("Actual URL is : " + actualUrl);
        System.out.println("Expected URL is : " + url);
    }

    // Storing Page Source in String variable
    String pageSource = myDriver.getPageSource();

    // Storing Page Source length in Int variable
    int pageSourceLength = pageSource.length();

    // Printing length of the Page Source on console
    System.out.println("Total length of the Page Source is : " + 	pageSourceLength);

    //Closing browser
    myDriver.close();
}
