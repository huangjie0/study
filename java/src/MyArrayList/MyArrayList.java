package MyArrayList;

public class MyArrayList {
    private Object[] elementDate;
    private int size;
    public MyArrayList(int initialCapacity){
        if (initialCapacity>0){
             elementDate = new Object[initialCapacity];
        }else {
            throw new RuntimeException("");
        }
    }
    public MyArrayList() {
        this(3);
    }

    public void add(Object obj){
        if (size==elementDate.length){
            Object[] newElementDate = new Object[elementDate.length*2];
            System.arraycopy(elementDate,0,newElementDate,0,elementDate.length);
            elementDate = newElementDate;
        }
        elementDate[size++]=obj;
    }
    public int size(){
        return size;
    }
    public static void main(String[] args) {
        MyArrayList ml= new MyArrayList();
        ml.add("a");
        ml.add("b");
        ml.add("c");
        ml.add("d");
    }
}
