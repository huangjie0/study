package Io;

import java.io.File;
import java.util.Arrays;

public class file {
    public static void main(String[] args) {
        //判断当前目录是否存在
        String path="E://Programming_learning//tem";
        checkFile(path);
    }
    public static void checkFile(String path){
        File f = new File(path);
        if (!f.exists()){
            System.out.println("该目录不存在！");
        }
        if (!f.isDirectory()){
            System.out.println("该路径不是一个目录");
            return;
        }
        removeFile(f);
    }
    public static void removeFile(File f){
        File[] files =f.listFiles();
        for (File f_1:files){
            if (f_1.isFile()){
                f_1.delete();
            }else {
                removeFile(f_1);
            }
        }

    }
}
