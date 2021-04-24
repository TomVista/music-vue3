import { defineComponent } from 'vue'

import { useStore } from "@/store";

import Card from "@/components/card.vue";


import './index.scss'


export default defineComponent({
    setup() {
        return useStore()
    },
    render() {
        return (
            <Card>music-applaction</Card>
        )
    }
})