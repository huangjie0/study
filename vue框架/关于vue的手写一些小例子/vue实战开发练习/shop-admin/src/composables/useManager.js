import { ref, reactive } from "vue";
import { logout, updatepassword } from "@/api/manager.js";
import { useRouter } from "vue-router";
import { showModal, toast } from "@/composables/util.js";
import { useStore } from "vuex";

export function useRepassword() {
    const store = useStore();
    const router = useRouter();
    const formDrawerRef = ref(null);
    const form = reactive({
      oldpassword: "",
      repassword: "",
      password: "",
    });
    const formRef = ref(null);
    const rules = {
      oldpassword: [
        { required: true, message: "旧密码不能为空", trigger: "blur" },
      ],
      password: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
      repassword: [
        { required: true, message: "确认密码不能为空", trigger: "blur" },
      ],
    };
    const onSubmit = () => {
      formRef.value.validate((value) => {
        if (!value) return false;
        formDrawerRef.value.showLoading();
        updatepassword(form)
          .then((res) => {
            toast("修改密码成功，请重新登录");
            store.dispatch("logout");
            //跳转到登录页面
            router.push("/login");
          })
          .finally(() => {
            formDrawerRef.value.hideLoading();
          });
      });
    };
    const openRePasswordForm = ()=>{
      formDrawerRef.value.open()
    }
    return{
      formDrawerRef,
      form,
      formRef,
      rules,
      onSubmit,
      openRePasswordForm 
    }
  }
  export function useLogout(){
    const store = useStore();
    const router = useRouter();
    function handlelogout() {
        showModal("是否要退出登录").then((res) => {
        logout().finally(() => {
            store.dispatch("logout");
            //跳转到登录页面
            router.push("/login");
            //提示退出成功
            toast("退出登录成功");
        });
        });
    }
    return {
        handlelogout
    }
  }