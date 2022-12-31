import {
    ref
} from "vue"
import {
    useCookies
} from "@vueuse/integrations/useCookies"
import {
    useRoute,
    onBeforeRouteUpdate
} from "vue-router"
import {
    router
} from "../router"
export function useTabList() {
    const route = useRoute()
    const cookie = useCookies()

    const activeTab = ref(route.path)
    const tabList = ref([{
        title: '后台首页',
        path: "/"
    }])
    //添加标签导航方法
    const addTab = (tab) => {
        let noTab = tabList.value.findIndex(t => t.path == tab.path) == -1
        if (noTab) {
            tabList.value.push(tab)
        }
        cookie.set("tabList", tabList.value)
    }
    // 初始化标签导航列表方法
    function initTabList() {
        let tabs = cookie.get("tabList")
        if (tabs) {
            tabList.value = tabs
        }
    }
    initTabList()

    onBeforeRouteUpdate((to, from) => {
        activeTab.value = to.path
        addTab({
            title: to.meta.title,
            path: to.path
        })
    })
    const handleClose = (c) => {
        switch (c) {
            case "clearAll":
                activeTab.value = "/"
                tabList.value = [{
                    title: '后台首页',
                    path: '/'
                }]
                break;
            case "clearOther":
                tabList.value = tabList.value.filter(tab => tab.path == '/' || tab.path == activeTab.value)
        }
        cookie.set("tabList", tabList.value)
    }
    const changeTab = (t) => {
        activeTab.value = t
        router.push(t)
    }
    const removeTab = (targetName) => {
        let tabs = tabList.value
        let a = activeTab.value
        if (a == targetName) {
            tabs.forEach((item, index) => {
                if (item.path == targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        a = nextTab.path
                    }
                }
            })
        }
        activeTab.value = a
        tabList.value = tabList.value.filter(tab => tab.path != targetName)
        cookie.set("tabList", tabList.value)
    }
    return {
        activeTab,
        tabList,
        changeTab,
        removeTab,
        handleClose 
    }

}