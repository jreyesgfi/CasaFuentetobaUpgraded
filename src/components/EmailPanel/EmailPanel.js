import { forwardRef, useRef } from "react";
import { useState } from "react";
import { MainHeading, Section, Text, TextWrapper } from "../../globalStyles"
import { dateToString } from "../../util/dataParser";
import FormInput from "../FormInput/FormInput";
import { BookingInfoWrapper, EmailPanelHeader, EmailPanelWrapper, EmailFormWrapper, EmailFormButtonsWrapper, NameInfoWrapper, EmailPanelButton, ConfirmationText } from "./EmailPanelStyles";
import React from "react";
import { emailDirection } from "../../data/EmailPanelData";

const EmailPanel = forwardRef((props, ref) => {

    // track in what step we are
    const [step, setStep] = useState(0);

    // ref to keep all values
    const formObjectRef = useRef({});

    // the selected days info
    const { rangeSelected = ['01/02/2023', '02/03/2024'] } = props;

    const selectedDays =
        `${rangeSelected[0]} - ${rangeSelected[1]}`;

    // a string with the full name
    const nombreCompleto = `${formObjectRef?.current?.['name'] || 'No especificado'} ${formObjectRef?.current?.['firstName'] || ''}`;

    return (
        <Section padding="0px 4rem" smPadding="0px 3rem" ref={ref}>
            <EmailPanelWrapper>
                {step < 2 &&
                    <>
                        <EmailPanelHeader>
                            Contáctanos para reservar
                        </EmailPanelHeader>
                        <BookingInfoWrapper>
                            <Text>
                                Fechas seleccionadas
                            </Text>
                            <Text>
                                {selectedDays}
                            </Text>
                        </BookingInfoWrapper>
                        <EmailFormWrapper>
                            {step === 0 &&
                                <>
                                    <FormInput
                                        label={'Nombre'}
                                        setValue={(value) => { formObjectRef.current['name'] = value }}
                                    />
                                    <FormInput
                                        label={'Apellidos'}
                                        setValue={(value) => { formObjectRef.current['firstName'] = value }}
                                    />
                                    <FormInput
                                        label={'Teléfono (opcional)'}
                                        type='number'
                                        setValue={(value) => { formObjectRef.current['phone'] = value }}
                                    />
                                </>
                            }
                            {step === 1 &&
                                <>
                                    <NameInfoWrapper>
                                        <Text>
                                            Nombre
                                        </Text>
                                        <Text>
                                            {nombreCompleto}
                                        </Text>
                                    </NameInfoWrapper>
                                    <FormInput
                                        label={'Comentarios'}
                                        longText={true}
                                        setValue={(value) => { formObjectRef.current['comments'] = value }}
                                    />
                                </>
                            }
                            <EmailFormButtonsWrapper>
                                <EmailPanelButton
                                    onClick={() => {
                                        if (step === 0) {
                                            props?.closePanel()
                                            return
                                        }
                                        setStep(step - 1)
                                    }}
                                >
                                    {step === 0 && 'Revisar fechas'}
                                    {step === 1 && 'Anterior'}
                                </EmailPanelButton>
                                <EmailPanelButton
                                    onClick={() => {
                                        if (step === 1) {
                                            window.open(
                                                `mailto:${emailDirection}?subject=Reserva para ${selectedDays}&body=Hola, soy ${nombreCompleto}. Quería solicitar la reserva de la casa rural para el periodo ${selectedDays}. \n${formObjectRef.current?.['phone'] ? 'Mi número de teléfono es el ' + formObjectRef.current?.['phone'] + '. ' : ''}\n${formObjectRef.current?.['comments'] ? 'Comentarios: ' + formObjectRef.current?.['comments'] + '. ' : ''}
                                         `
                                            );
                                        }
                                        setStep(step + 1)
                                    }}
                                >
                                    {step === 0 && 'Siguiente'}
                                    {step === 1 && 'Enviar correo'}
                                </EmailPanelButton>
                            </EmailFormButtonsWrapper>
                        </EmailFormWrapper>
                    </>
                }
                {step === 2 &&
                    <>
                        <MainHeading>
                            Reserva finalizada
                        </MainHeading>
                        <TextWrapper>
                            <ConfirmationText>
                                En breve nos pondremos en contacto con usted por correo para confirmar la reserva.
                            </ConfirmationText>
                        </TextWrapper>
                    </>
                }
            </EmailPanelWrapper>
        </Section>
    )
})
export default EmailPanel;