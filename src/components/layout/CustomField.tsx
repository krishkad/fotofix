"use client";
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod';
import { formSchema } from './TransformationForm';
import { Control } from 'react-hook-form';


type CustomFieldProps = {
    control: Control<z.infer<typeof formSchema>> | undefined;
    name: keyof z.infer<typeof formSchema>;
    classname: string;
    formLabel: string;
    render: (props: { field: any }) => React.ReactNode | undefined
}

const CustomField = ({ control, name, classname, formLabel, render }: CustomFieldProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={classname}>{formLabel}</FormLabel>
                    <FormControl>{render({ field })}</FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomField