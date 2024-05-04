
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const PDF = ({ banda }) => {

    const pdfStyles = StyleSheet.create({
        container: {
            
            fontSize: 12,
            padding: 20
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10
        },
        subtitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5
        },
        text: {
            marginBottom: 5
        },
        list: {
            marginBottom: 10
        },
        footer: {
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            fontSize: 10,
            textAlign: 'center'
        }
    });

    const generatePDF = () => {
        return (
            <Document>
                <Page>
                    <View style={pdfStyles.container}>
                        <Text style={pdfStyles.title}>{banda.nombre}</Text>
                        <Text style={pdfStyles.text}>Año de formación: {banda.año_formacion}</Text>
                        <Text style={pdfStyles.subtitle}>Miembros:</Text>
                        <View style={pdfStyles.list}>
                            {banda.miembros.map((miembro, index) => (
                                <Text key={index} style={pdfStyles.text}>{miembro}</Text>
                            ))}
                        </View>
                        <Text style={pdfStyles.text}>Biografía: {banda.biografia}</Text>
                        <Text style={pdfStyles.text}>Primer disco: {banda.primer_disco}</Text>
                        <View style={pdfStyles.footer}>
                            <Text>Grupo x2</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        );
    };

    return generatePDF();
};

export default PDF;
