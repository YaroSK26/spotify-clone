"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import {ThemeSupa} from "@supabase/auth-ui-shared"
import useAuthModal from "@/hooks/useAuthModal"
import { useEffect } from "react"

const AuthModal = () => {

    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const {session} = useSessionContext()
    const {onClose,isOpen} = useAuthModal()

    useEffect(() =>{
        if (session) {
            router.refresh()
            onClose()
        }
    },[session,router,onClose])

    const onChange = (open: Boolean) => {
        if (!open) {
            onClose()
        }
    }

  return (
   <Modal title="Welcome back" description="login to your acount" isOpen={isOpen} onChange={()=>{}}>
                <Auth theme="dark"  providers={["google","github" ]} magicLink
                appearance={{theme:ThemeSupa, variables: {default: {colors:{brand: "#404040", brandAccent:"#22c55e"}}}}} supabaseClient={supabaseClient}/>
                
   </Modal>
  )
}

export default AuthModal
