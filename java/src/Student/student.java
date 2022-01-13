package Student;

public class student {
    private int id;
    private String name;
    private int score;
    public student(int id,String name,int score){
        this.id=id;
        this.name=name;
        this.score=score;
    }
    public void setid(int id){
        this.id=id;
    }
    public int getid(){
        return id;
    }
    public void setName(String name){
        this.name=name;
    }
    public String getname(){
        return name;
    }
    public void setScore(int score){
        this.score=score;
    }
    public int getScore(){
        return score;
    }
}
