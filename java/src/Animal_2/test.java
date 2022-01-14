package Animal_2;

public class test {
    public void getInstance(animal animal){
        animal.eat();
    }
    public static void main(String[] args) {
        animal animal=new cat();
        animal.eat();
        animal animal1= new Dog();
        animal1.eat();
        animal e= new dae();
        e.eat();
    }
}
