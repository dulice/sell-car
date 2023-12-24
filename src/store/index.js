import { proxy } from "valtio";

export const state = proxy({
    color: '#000000',
    intro: true
})
