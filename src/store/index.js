import { proxy } from "valtio";

export const state = proxy({
    color: '#000000',
    intro: true,
    position: [0,0,0],
    rotation: [0,0,0],
    scale: 1
})
