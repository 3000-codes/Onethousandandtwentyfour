// 这里放组件的props及公共方法
import type { ExtractPropTypes } from "vue" 
//  as const，会让对象的每个属性变成只读（readonly）
export const btnProps = {
    size:{
        type:String
    },
    type:{
        type:String
    }
} as const

export type btnProps = ExtractPropTypes<typeof btnProps>