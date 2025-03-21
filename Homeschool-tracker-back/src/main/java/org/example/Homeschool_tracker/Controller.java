@RestController
public class Controller {

    @GetMapping("/")
    public String home () {
        String str
                = "<html><body><font color=\"green\">"
                + "<h1>WELCOME To GeeksForGeeks</h1>"
                + "</font></body></html>";
        return str;
    }
}