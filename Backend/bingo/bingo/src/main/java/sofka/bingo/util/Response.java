package sofka.bingo.util;

import java.util.ArrayList;

public class Response {
    public Boolean error = false;
    public String message = "";
    public String status = "Todo Bien";
    public Object data;
    public ArrayList<Object> dataGame = new ArrayList<>();
}
