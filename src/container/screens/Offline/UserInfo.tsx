import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../assets/styles/colors/colors';
import { fontFamily, getRandomNumber } from '../../../lib/globals';
import { useNetInfo } from '../../../hooks/useNetInfo';
import { insertNewRealmObject } from '../../../database';
import { USERINFO } from '../../../database/allSchemas';

interface UserInfoData {
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    mobileNumber: string;
    age: number;
}

const UserInfo: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<UserInfoData>();
    const { isConnected } = useNetInfo();

    const onSubmit = (data: UserInfoData) => {
        if (!isConnected) {
            const myRandomID = getRandomNumber(1, 100);
            const obj: any = {
                id: myRandomID,
                FirstName: data.firstName,
                LastName: data.lastName,
                Email: data.email,
                Title: data.title,
                MobileNumber: data.mobileNumber,
                age: Number(data.age),
                time: new Date(),
            };
            console.log(obj);
            insertNewRealmObject(obj, USERINFO).then((res) => {
                showToast('inserted successfully')
                reset()
            });
        } else {
            // call FetchAPI
            showToast('inserted successfully')
            reset();
        }
    };

    const showToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {errors.firstName && <Text style={styles.error}>This is required.</Text>}

                    <Text style={styles.label}>Last Name</Text>
                    <Controller
                        control={control}
                        name="lastName"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {errors.lastName && <Text style={styles.error}>This is required.</Text>}

                    <Text style={styles.label}>Email</Text>
                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType="email-address"
                            />
                        )}
                    />
                    {errors.email && <Text style={styles.error}>This is required and should be a valid email.</Text>}

                    <Text style={styles.label}>Title</Text>
                    <Controller
                        control={control}
                        name="title"
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <Picker
                                selectedValue={value}
                                onValueChange={(itemValue: any) => onChange(itemValue)}
                                style={styles.input}
                            >
                                <Picker.Item label="Mr" value="Mr" />
                                <Picker.Item label="Mrs" value="Mrs" />
                                <Picker.Item label="Miss" value="Miss" />
                                <Picker.Item label="Dr" value="Dr" />
                            </Picker>
                        )}
                    />
                    {errors.title && <Text style={styles.error}>This is required.</Text>}

                    <Text style={styles.label}>Mobile Number</Text>
                    <Controller
                        control={control}
                        name="mobileNumber"
                        rules={{ required: true, pattern: /^[0-9]{10}$/ }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType="phone-pad"
                            />
                        )}
                    />
                    {errors.mobileNumber && <Text style={styles.error}>This is required and should be a valid mobile number.</Text>}

                    <Text style={styles.label}>Age</Text>
                    <Controller
                        control={control}
                        name="age"
                        rules={{ required: true, min: 1 }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value?.toString()}
                                keyboardType="numeric"
                            />
                        )}
                    />
                    {errors.age && <Text style={styles.error}>This is required and should be a positive number.</Text>}

                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={styles.ctaButton}>
                        <Text style={styles.ctaButtonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightWhite,
    },
    formContainer: {
        padding: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 15,
        fontFamily: fontFamily.semiBold,
        fontWeight: 'bold',
        color: Colors.black,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: Colors.darkRed,
        marginBottom: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioLabel: {
        marginRight: 10,
    },
    radio: {
        marginRight: 20,
    },
    ctaButton: {
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 8,
    },
    ctaButtonText: {
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default UserInfo;
