"use client"

import { useRegistration } from "@/context/RegistrationContext"
import { Modal } from "@/components/ui/Modal"
import { RegistrationForm } from "@/components/RegistrationForm"

export function RegistrationModalWrapper() {
    const { isModalOpen, closeModal } = useRegistration()

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal} title="הרשמה למרוץ">
            <RegistrationForm />
        </Modal>
    )
}
