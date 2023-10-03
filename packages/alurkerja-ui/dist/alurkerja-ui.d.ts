import { AxiosInstance } from 'axios';
import { AxiosStatic } from 'axios';
import { ButtonHTMLAttributes } from 'react';
import type { ComponentProps } from 'react';
import { Context } from 'react';
import { Control } from 'react-hook-form';
import { CSSProperties } from 'react';
import { Dispatch } from 'react';
import { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import { FormState } from 'react-hook-form';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import type { Placement } from '@floating-ui/core';
import { Props } from 'react-select';
import type { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { SetStateAction } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { UseFormReset } from 'react-hook-form';
import { UseFormSetValue } from 'react-hook-form';

export declare const Address: FC<AddressProps>;

export declare interface AddressProps {
    setValue: UseFormSetValue<FieldValues>;
    onSubmit?: () => void;
}

export declare interface AppSpec {
    name: string;
    description: string;
    tables: TableSpec[];
}

export declare const AuthContext: Context<AxiosInstance | AxiosStatic>;

export declare const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLSpanElement>>;

export declare const AvatarGroup: FC<AvatarGroupProps>;

export declare interface AvatarGroupProps {
    maxCount?: number;
    chained?: boolean;
    className?: string;
    children: any;
    omittedAvatarProps?: AvatarProps;
    onOmittedAvatarClick?: () => void;
}

export declare interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    shape?: 'rounded' | 'square' | 'circle';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    src?: string;
    srcSet?: string;
    alt?: string;
}

/**
 * Badge components
 */
export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
    /** handle max count on badge, when passed it then return with +  */
    maxCount?: number;
    /** content like avatar */
    content: string | number;
}

export declare interface BaseInputProps {
    invalid?: boolean;
    withoutLabel?: boolean;
    rules?: RegisterOptions;
}

declare interface BpmnInterface {
    url: string;
    onClickActivity?: (id: string) => void;
    counterMode?: string;
    selectedItem: string;
}

export declare const Button: FC<ButtonProps>;

declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant?: 'filled' | 'outlined' | 'text';
    size?: 'small' | 'medium';
    block?: boolean;
    loading?: boolean;
    icon?: JSX.Element;
}

export declare const Card: FC<CardProps>;

export declare const CardFile: FC<{
    data: File_2[];
    onClickDelete?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: File_2) => void;
    onClickDownload?: (file: File_2) => void;
    readonly?: boolean;
}>;

export declare const CardImage: FC<{
    data: File_2[];
    onClickDelete?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, file: File_2) => void;
    readonly?: boolean;
}>;

export declare interface CardProps {
    title: string;
    children: ReactNode;
}

export declare const Checkbox: FC<CheckboxProps>;

export declare interface CheckboxProps {
    listOptionWithAPI?: {
        url: string;
        nameKey: string;
        valueKey: string;
        labelKey: string;
    };
    disabled?: boolean;
    listOption?: ListOption[];
    onChange?: (value: (string | number)[] | null) => void;
    defaultValue?: (string | number)[];
    name?: string;
    className?: string;
}

export declare const DiagramBpmn: FC<DiagramBpmnProps>;

export declare interface DiagramBpmnProps {
    url: string;
    onClickActivity?: (id: string) => void;
    counterMode?: string;
    /**
     * @param string
     * {children} akan di replace dengan jumlah data per usertask
     */
    customBadge?: (task_id: string) => string;
}

export declare const DirectUpload: FC<DirectUploadProps>;

declare interface DirectUploadMesageProps {
    action?: string;
    file_type?: string;
    uploading_message?: string;
    upload_error_header?: string;
    upload_error_message?: string;
    file_type_error_message?: string;
    filesize_exceed_header?: string;
    filesize_exceed_message?: string;
}

export declare interface DirectUploadProps {
    baseUrl: string;
    service: string;
    type?: 'image' | 'file';
    multiple?: boolean;
    allowedFileSizeInMb?: number;
    allowedExtension?: string[];
    onSuccess: (res: any) => void;
    defaultValue?: File_2[];
    message?: DirectUploadMesageProps;
    hidePreview?: boolean;
}

export declare const Drawer: FC<DrawerProps>;

export declare interface DrawerProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    menuConfig: MenuConfig[];
}

export declare const Dropdown: FC<DropdownProps>;

export declare interface DropdownProps {
    triggerElement: JSX.Element;
    content?: JSX.Element;
}

export declare interface FieldActionProperties {
    label: string;
    action_label: string;
    method: string;
    form_type: string;
    confirm?: {
        title: string;
        message: string;
        confirm_text: string;
        cancel_text: string;
    };
    path: string;
    icon: string;
    type: string;
}

declare interface FieldActionProperties_2 {
    label: string
    action_label: string
    method: string
    form_type: string
    confirm?: {
        title: string
        message: string
        confirm_text: string
        cancel_text: string
    }
    path: string
    icon: string
    type: string
}

export declare interface FieldProperties {
    name: string;
    label: string;
    required: boolean;
    searchable: boolean;
    filterable: boolean;
    sortable: boolean;
    type: string;
    form_field_type: string;
    primary: boolean;
    is_hidden_in_create: boolean;
    is_hidden_in_edit: boolean;
    is_hidden_in_list: boolean;
    is_hidden_in_detail: boolean;
    rules: string[];
    format: string;
    prefix: string;
    suffix: string;
    select_options?: {
        method: string;
        option_key: string;
        option_label: string;
        url: string;
        options?: {
            key: string | number;
            label: string;
        }[];
    };
    table_value_mapping?: {
        name: string;
        relation: string;
        type: string;
        value: string;
    };
    custom_field_atribute?: {
        type: string;
        name: string;
        is_multiple: boolean;
        allowed_extension: string[];
        service: string;
        spec?: TableSpec;
        table: string;
        action_message?: string;
        upload_error_header?: string;
        uploading_message?: string;
        upload_error_message?: string;
        file_type_message?: string;
    };
    list_order: number;
    edit_order: number;
    create_order: number;
}

declare interface FieldProperties_2 {
    name: string
    label: string
    required: boolean
    searchable: boolean
    filterable: boolean
    sortable: boolean
    type: string
    form_field_type: string
    primary: boolean
    is_hidden_in_create: boolean
    is_hidden_in_edit: boolean
    is_hidden_in_list: boolean
    is_hidden_in_detail: boolean
    rules: string[]
    format: string
    prefix: string
    suffix: string
    select_options?: {
        method: string
        option_key: string
        option_label: string
        url: string
        options?: { key: string | number; label: string }[]
    }
    table_value_mapping?: {
        name: string
        relation: string
        type: string
        value: string
    }
    custom_field_atribute?: {
        type: string
        name: string
        is_multiple: boolean
        allowed_extension: string[]
        service: string
        spec?: TableSpec_2
        table: string
        action_message?: string
        upload_error_header?: string
        uploading_message?: string
        upload_error_message?: string
        file_type_message?: string
    }
    list_order: number
    edit_order: number
    create_order: number
}

declare interface File_2 {
    collection_name: string;
    conversions_disk: string;
    created_at: string;
    custom_properties: any[];
    disk: string;
    file_name: string;
    generated_conversions: any[];
    id: number;
    manipulations: any[];
    mime_type: string;
    model_id: string;
    model_type: string;
    name: string;
    order_column: string;
    original_url: string;
    preview_url: string;
    responsive_images: any[];
    size: number;
    updated_at: string;
    uuid: string;
}
export { File_2 as File }

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export declare const Floating: FC<FloatingProps>;

export declare interface FloatingProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'content' | 'style'> {
    animation?: false | `duration-${number}`;
    arrow?: boolean;
    content: ReactNode;
    placement?: 'auto' | Placement;
    style?: FloatingStyle;
    theme: FlowbiteFloatingTheme;
    trigger?: 'hover' | 'click';
    minWidth?: number;
}

export declare type FloatingStyle = 'dark' | 'light' | 'auto';

export declare interface FlowbiteFloatingArrowTheme {
    base: string;
    placement: string;
    style: {
        dark: string;
        light: string;
        auto: string;
    };
}

export declare interface FlowbiteFloatingTheme {
    arrow: FlowbiteFloatingArrowTheme;
    animation: string;
    base: string;
    content: string;
    hidden: string;
    style: {
        auto: string;
        dark: string;
        light: string;
    };
    target: string;
}

export declare type FlowbiteTooltipTheme = FlowbiteFloatingArrowTheme;

export declare const FormLowcode: FC<FormLowcodeProps>;

export declare const FormLowcodeLite: FC<FormLowcodeLiteProps>;

export declare interface FormLowcodeLiteProps {
    baseUrl: string;
    init?: ({ setValue }: {
        setValue: UseFormSetValue<FieldValues>;
    }) => void;
    submitButtonText?: string;
    submitButtonIcon?: JSX.Element;
    inline?: boolean;
    inputSize?: 'xs' | 'sm' | 'md' | 'lg';
    renderFlow?: 'grid' | 'row' | 'column';
    cancelButtonText?: string;
    cancelButtonIcon?: JSX.Element;
    onSubmit: (data: FieldValues) => void;
    onCancel: (reset: UseFormReset<FieldValues>) => void;
    spec: {
        defaultValue?: any;
        form_field_type: string;
        label: string;
        name: string;
        type: string;
        select_options?: {
            method?: string;
            option_key: string;
            option_label: string;
            url?: string;
            options?: {
                key: string | number;
                label: string;
            }[];
        };
    }[];
}

declare interface FormLowcodeProps {
    /**  base API url (lowcode spec)*/
    baseUrl: string;
    specPath?: string;
    /**  handleSubmit from  react-hook-form*/
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onSubmit?: (form: FieldValues) => void;
    /**  control from  react-hook-form*/
    control: Control;
    /**  formState from  react-hook-form*/
    formState: FormState<FieldValues>;
    /**  setValue from  react-hook-form*/
    setValue: UseFormSetValue<FieldValues>;
    /**  render custom field form base for ex custom by fieldSpec.name*/
    customField?: ({ field, setValue, defaultField, value, }: {
        field: FieldProperties;
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
        value: string | number | boolean;
    }) => JSX.Element;
    /**  handler success action*/
    onSuccess?: () => void;
    /**  handler error action*/
    onError?: (err: any) => void;
    /**  handler cancel  action*/
    onCancel?: () => void;
    /** id for detail / edit form  */
    id?: number | string;
    taskId?: number | string;
    /** to disabled form */
    disabled?: boolean;
    textSubmitButton?: string;
    readonly?: boolean;
    title?: ReactNode;
    message?: {
        success_create_title?: string;
        success_create_text?: string;
        success_edit_title?: string;
        success_edit_text?: string;
        [x: string]: any;
    };
    isBpmn?: boolean;
    isUsertask?: boolean;
    spec?: TableSpec;
    previewBeforeSubmit?: boolean;
    extraActionButton?: ReactElement<JSX.Element>;
    inline?: boolean;
    customCancelButton?: () => ReactNode;
    customSubmitButton?: () => ReactNode;
    /**
     * render form using grid with 1/2/3 column
     * @param number
     *
     * example :
     *
     ```tsx
     <AlurkerjaForm
     baseUrl="https://api-geekacademy.merapi.javan.id"
     tableName="cuti"
     module="bpmn"
     formState={formState}
     handleSubmit={handleSubmit}
     control={control}
     setValue={setValue}
     onSubmit={(data) => console.log(data)}
     columnNumber={2}
     />
     ```
     */
    columnNumber?: 1 | 2 | 3;
    /**
     * when using the `columnNumber` sometimes there are fields that require more than 1 column, use this!
     * @param name
     * @param colSpan
     * example :
     * create user_id field used 2 column
     ```tsx
     <AlurkerjaForm
     baseUrl="https://api-geekacademy.merapi.javan.id"
     tableName="cuti"
     module="bpmn"
     formState={formState}
     handleSubmit={handleSubmit}
     control={control}
     setValue={setValue}
     onSubmit={(data) => console.log(data)}
     columnNumber={2}
     columnSpan={{ user_id: 2 }}
     />
     ```
     */
    columnSpan?: {
        [x: string]: 2 | 3;
    };
    customTitle?: ReactElement<JSX.Element>;
}

export declare const Header: FC<HeaderProps>;

export declare interface HeaderAction {
    label: string;
    action_label: string;
    method: string;
    form_type: string;
    path: string;
    icon: string;
    type: string;
}

declare interface HeaderAction_2 {
    label: string
    action_label: string
    method: string
    form_type: string
    path: string
    icon: string
    type: string
}

export declare interface HeaderProps {
    role?: string;
    onClickAvatar?: () => void;
    onClickNotification?: () => void;
    avatarContent?: JSX.Element;
    notifcationContent?: JSX.Element;
}

export declare interface IAlurkerjaDetailLowcode {
    /**  base API url (lowcode spec)*/
    baseUrl: string;
    specPath?: string;
    id: number;
}

export declare const Input: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare const InputDate: FC<InputDateProps>;

export declare interface InputDateProps extends Omit<ReactDatePickerProps, 'onChange'>, BaseInputProps {
    onChange?: (date: Date | null | undefined) => void;
    defaultValue?: Date;
}

export declare interface InputProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'>, BaseInputProps {
    asElement?: React_2.ElementType;
    disabled?: boolean;
    textArea?: boolean;
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    unstyle?: boolean;
    form?: any;
    field?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export declare const InputTable: FC<InputTable_2>;

declare interface InputTable_2 {
    fieldSpec: FieldProperties;
    onChange?: (row: any) => void;
}

declare const InputTable: FC<InputTable_2>;

export declare const InputTypesContext: Context<InputTypesContextInterface | null>;

declare type InputTypesContextInterface = {
    form_field_type: string;
    ElementForm?: ({}: any) => JSX.Element;
    ElementTable?: ({ children }: any) => JSX.Element;
}[];

export declare const InputWithModal: FC<InputWithModalProps>;

export declare interface InputWithModalProps {
    /** title for modal */
    title: string;
    value?: string;
    children: ({ closeModal }: {
        closeModal: () => void;
    }) => JSX.Element;
}

export declare const InputYear: FC<InputYearProps>;

export declare interface InputYearProps {
    onChange?: (value?: Date | null) => void;
    defaultValue?: Date | null;
}

export declare interface IPendingAlurkerjaTableLowcode {
    title?: string;
    /** base API url (lowcode spec) */
    baseUrl: string;
    setValue: Function;
    /**  state for refetching data*/
    renderState?: number;
    /**  setter state for refeching data*/
    setRenderState?: Dispatch<SetStateAction<number>>;
    /**  state to store filter data*/
    filterBy?: {
        [x: string]: any;
    };
    /**  setter for set filter data*/
    setFilterBy?: Dispatch<SetStateAction<{
        [x: string]: any;
    } | undefined>>;
    /**  state for store current searching data*/
    search?: string;
    /**  setter for set current searching data*/
    setSearch?: Dispatch<SetStateAction<string | undefined>>;
    /**  state to store page config*/
    pageConfig?: {
        limit: number;
        page: number;
    };
    /**  setter to set page config*/
    setPageConfig?: Dispatch<SetStateAction<{
        limit: number;
        page: number;
    }>>;
    /**  state to store selected row*/
    selectedRow?: number[];
    /**  setter to set selected row*/
    setSelectedRow?: Dispatch<SetStateAction<number[]>>;
    /**  render custom cell table base for ex custom by fields.name*/
    customCell?: ({ name, fields, value, defaultCell, }: {
        name: string;
        fields: {
            [x: string]: FieldProperties;
        };
        value: any;
        defaultCell: JSX.Element;
    }) => JSX.Element;
    /**  will be trigger when create button clicked*/
    onClickCreate?: () => void;
    /**  will be trigger when button edit clicked*/
    onClickEdit?: (fieldSpec: FieldActionProperties, id: number) => void;
    /**  will be trigger when button delete clicked*/
    onClickDelete?: (fieldSpec: FieldActionProperties, id: number) => void;
    /**  will be trigger when button detail clicked*/
    onClickDetail?: (id: number) => void;
    onDeleteConfirm?: (id: number) => void;
    /** trying to custom header table? use this*/
    headerElement?: JSX.Element;
    customField?: ({ field, setValue, defaultField, }: {
        field: [string, FieldProperties];
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
        value: string | number | boolean;
    }) => JSX.Element;
    textSubmitButton?: string;
    customFilterField?: ({ field, setValue, defaultField, }: {
        field: [string, FieldProperties];
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
    }) => JSX.Element;
    /** Custom text column Aksi */
    labelAction?: string;
    message?: {
        success_create_title?: string;
        success_create_text?: string;
        success_edit_title?: string;
        success_edit_text?: string;
        success_delete_title?: string;
        success_delete_text?: string;
    };
    /** https://tailwindcss.com/docs/table-layout */
    layout?: 'auto' | 'fixed';
    canFilter?: boolean;
}

export declare interface Lang {
    validation: {
        required: string;
        pattern: string;
        maxLength: string;
        max: string;
    };
}

export declare const LangContext: Context<Lang | null>;

declare interface ListOption {
    label: string;
    value: string | number;
}

declare interface ListOption_2 {
    label: string;
    key: string | number;
}

export declare interface MenuConfig {
    href: string;
    label: string;
    icon?: JSX.Element;
    child?: MenuConfig[];
    groupBy?: string;
    description?: string;
}

export declare const Modal: React_2.ForwardRefExoticComponent<ModalProps & React_2.RefAttributes<ModalRef>>;

export declare interface ModalProps extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'children'> {
    triggerButton?: React_2.ReactNode;
    title?: string;
    style?: CSSProperties;
    children: (({ closeModal, openModal }: {
        closeModal: () => void;
        openModal: () => void;
    }) => JSX.Element) | JSX.Element;
    width?: string | number;
    maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export declare type ModalRef = {
    closeModal: () => void;
    openModal: () => void;
};

export declare const ModalWithState: FC<ModalWithStateProps>;

export declare interface ModalWithStateProps {
    setShow: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    title: string;
}

export declare interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export declare const Pagination: FC<PaginationProps>;

export declare interface PaginationLowcode {
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    number_of_element: number;
    pageable: {
        offset: number;
        unpaged: false;
        paged: boolean;
    };
    size: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    total_elements: number;
    total_page: number;
}

export declare interface PaginationProps {
    pagination?: any | undefined;
    pageConfig?: {
        limit: number;
        page: number;
    };
    setPageConfig?: Dispatch<SetStateAction<{
        limit: number;
        page: number;
    }>>;
    tableSpec?: TableSpec;
}

export declare interface PendingTableLayoutProps {
    title?: string;
    /** base API url (lowcode spec) */
    baseUrl: string;
    /**  setter state for refeching data*/
    setRenderState?: Dispatch<SetStateAction<number>>;
    /**  state to store filter data*/
    filterBy?: {
        [x: string]: any;
    };
    /**  setter for set filter data*/
    setFilterBy?: Dispatch<SetStateAction<{
        [x: string]: any;
    } | undefined>>;
    addTableData?: Function; /**  state for store current searching data*/
    search?: string;
    /**  setter for set current searching data*/
    setSearch?: Dispatch<SetStateAction<string | undefined>>;
    /**  state to store page config*/
    pageConfig?: {
        limit: number;
        page: number;
    };
    /**  setter to set page config*/
    setPageConfig?: Dispatch<SetStateAction<{
        limit: number;
        page: number;
    }>>;
    /**  will be trigger when create button clicked*/
    onClickCreate?: () => void;
    /** trying to custom header table? use this*/
    headerElement?: JSX.Element;
    customField?: ({ field, setValue, defaultField, }: {
        field: [string, FieldProperties];
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
        value: string | number | boolean;
    }) => JSX.Element;
    textSubmitButton?: string;
    children: React.ReactNode;
    tableSpec: TableSpec | undefined;
    pagination: PaginationLowcode | undefined;
    extraButton?: () => JSX.Element | null;
    customFilterField?: ({ field, setValue, defaultField, }: {
        field: [string, FieldProperties];
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
    }) => JSX.Element;
    message?: {
        success_create_title?: string;
        success_create_text?: string;
        success_edit_title?: string;
        success_edit_text?: string;
        success_delete_title?: string;
        success_delete_text?: string;
    };
    canFilter?: boolean;
}

export declare const PendingUpload: FC<PendingUploadProps>;

export declare interface PendingUploadProps {
    name?: string;
    required?: boolean;
    type?: 'file' | 'image';
    allowedExtension?: string[];
    /** onChange return has File type*/
    asFile?: boolean;
    multiple?: boolean;
    onChange?: (file: any) => void;
    onDownload?: (file: any) => void;
    disabled?: boolean;
    defaultValue?: any[];
    hidePreview?: boolean;
    description?: string;
}

/**
 * A Progress loader show the progression of an operation flow in visual way.
 */
export declare const Progress: React_2.ForwardRefExoticComponent<ProgressProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ProgressProps extends React_2.HTMLAttributes<HTMLDivElement> {
    /** Progress variants */
    variant?: 'line' | 'circle';
    /** The current value of progress */
    percent: number;
    /** Whether to display progress info */
    showInfo?: boolean;
    /** Size of progress bar (only applicable when variant="line") */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Determine the size of circular progress (only applicable when variant="circle") */
    width?: number;
    /** Width of the circular progress (only applicable when variant="circle") */
    strokeWidth?: number;
    /**	Style of the progress linecap (only applicable when variant="circle") */
    strokeLinecap?: 'inherit' | 'butt' | 'round' | 'square';
    /** Custom color for Progress, available colors option based on tailwind */
    color?: string;
    /** The gap degree of circle progress (only applicable when variant="circle") */
    gapDegree?: number;
    /** Gap postion of circle progress (only applicable when variant="circle") */
    gapPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export declare const Radio: FC<RadioProps>;

export declare interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'onChange'> {
    listOptionWithAPI?: {
        url: string;
        nameKey: string;
        valueKey: string;
        labelKey: string;
    };
    listOption?: ListOption_2[];
    onChange?: (value?: string | number) => void;
    name?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    optionClassName?: string;
}

export declare const ReactDiagramSingle: FC<BpmnInterface>;

export declare const ReactHookWrapper: FC<ReactHookWrapperProps>;

export declare interface ReactHookWrapperProps {
    inline?: boolean;
    control: Control;
    children: ReactNode;
    labelSize?: 'sm' | 'md' | 'lg';
}

export declare const Select: FC<SelectProps>;

export declare interface SelectProps extends Props, BaseInputProps {
    height?: string | number;
    options: any;
    onChange?: any;
}

export declare const SelectWithModal: FC<SelectWithModalProps>;

export declare interface SelectWithModalProps {
    options: {
        value: string | number | boolean;
        label: string;
    }[];
    onChange: (data: string | number | boolean | undefined) => void;
    placeholder?: string;
    title?: string;
}

export declare const Sidebar: ForwardRefExoticComponent<SidebarProps & RefAttributes<HTMLDivElement>>;

export declare interface SidebarProps {
    logo?: ReactNode;
    menuConfig: MenuConfig[];
    toggled: boolean;
    setToggled: Dispatch<SetStateAction<boolean>>;
    width?: string | number;
    /** current path from router.pathName from react-router-dom or next/router */
    currentPathName?: string;
    className?: string;
    menuWrapper?: ({ children, menu }: {
        children: JSX.Element;
        menu: MenuConfig;
    }) => JSX.Element;
}

/**
 * Display a placeholder preview of component before the data gets loaded, it can help to the user aware and that the data is processing.
 */
export declare const Skeleton: React_2.ForwardRefExoticComponent<SkeletonProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface SkeletonProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    /** Appearance of Skeleton */
    variant?: 'circle' | 'block';
    /** Height of Skeleton */
    height?: number | string;
    /** Width of Skeleton */
    width?: number | string;
    /** Whether to active animation */
    animation?: boolean;
}

export declare interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

/**
 * Spinner - indicator loading component
 */
export declare const Spinner: {
    (props: SpinnerProps): JSX_2.Element;
    defaultProps: {
        size: number;
    };
};

export declare interface SpinnerProps extends React.DetailedHTMLProps<React.HTMLAttributes<JSX_2.Element>, JSX_2.Element> {
    /** size spinner */
    size?: number | string;
}

export declare const StatusBadge: React_2.FC<StatusBadgeProps>;

export declare interface StatusBadgeProps {
    label?: string;
    color?: 'primary' | 'danger' | 'success' | 'warning' | 'default';
}

export declare const StatusIcon: ForwardRefExoticComponent<StatusIconProps & RefAttributes<HTMLSpanElement>>;

export declare interface StatusIconProps {
    type: 'info' | 'success' | 'warning' | 'danger';
}

/**
 *
 * @returns 0 for false, 1 for true
 */
export declare const Switch: FC<SwitchProps>;

export declare interface SwitchProps {
    options: {
        value: string | number | boolean;
        label: string;
    }[];
    /** callback to get value */
    onChange?: (value: boolean | string | number | undefined) => void;
    /** props to set defaultvalue */
    defaultValue?: boolean;
}

export declare interface TableConfig {
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_create_color?: string;
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_edit_color?: string;
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_delete_color?: string;
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_detail_color?: string;
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_bpmn_color?: string;
    preview_before_submit?: boolean;
    message_not_found?: string;
    table_number_header?: string;
    header_uppercase?: boolean;
    cell_file_modal_title?: string;
}

declare interface TableConfig_2 {
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_create_color?: string
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_edit_color?: string
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_delete_color?: string
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_detail_color?: string
    /** use tailwind class eg: bg-red-400 text-red-100 */
    button_bpmn_color?: string

    preview_before_submit?: boolean
    message_not_found?: string

    table_number_header?: string

    header_uppercase?: boolean

    cell_file_modal_title?: string
}

export declare const TableLowcode: FC<TableLowcodeProps>;

export declare const TableLowcodeContext: Context<TableLowcodeProps_2>;

declare interface TableLowcodeProps {
    spec?: TableSpec;
    data?: {
        [x: string]: any;
    }[];
    /**
     * when u facing issue for example API endpoint for list data not same as API endpoint for spec, used this for overide endpoint for list data
     * @param string eg '/api/crud/custom-path'
     */
    dataPath?: string;
    title?: string;
    /** base API url (lowcode spec) */
    baseUrl: string;
    specPath?: string;
    /**  state for refetching data*/
    renderState?: number;
    /**  setter state for refeching data*/
    setRenderState?: Dispatch<SetStateAction<number>>;
    /**  state for refetching data*/
    extendQuery?: {
        [x: string]: string;
    };
    /**  setter state for refeching data*/
    setExtendQuery?: Dispatch<SetStateAction<{
        [x: string]: string;
    }>>;
    /**  state to store filter data*/
    filterBy?: {
        [x: string]: any;
    };
    /**  setter for set filter data*/
    setFilterBy?: Dispatch<SetStateAction<{
        [x: string]: any;
    } | undefined>>;
    /**  state for store current searching data*/
    search?: string;
    /**  setter for set current searching data*/
    setSearch?: Dispatch<SetStateAction<string | undefined>>;
    /**  state to store page config*/
    pageConfig?: {
        limit: number;
        page: number;
    };
    /**  setter to set page config*/
    setPageConfig?: Dispatch<SetStateAction<{
        limit: number;
        page: number;
    }>>;
    canBulk?: boolean;
    /**  state to store selected row*/
    selectedRow?: number[];
    /**  setter to set selected row*/
    setSelectedRow?: Dispatch<SetStateAction<number[]>>;
    /**  render custom cell table base for ex custom by fields.name*/
    customCell?: ({ name, fields, value, rowValue, defaultCell, }: {
        name: string;
        fields: {
            [x: string]: FieldProperties;
        };
        value: any;
        rowValue: {
            [x: string]: any;
        };
        defaultCell: JSX.Element;
    }) => JSX.Element;
    /**  will be trigger when create button clicked*/
    onClickCreate?: () => void;
    /**  will be trigger when button edit clicked*/
    onClickEdit?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void;
    /**  will be trigger when button delete clicked*/
    onClickDelete?: (fieldSpec: FieldActionProperties, id: number | string, row: any) => void;
    /**  will be trigger when button detail clicked*/
    onClickDetail?: (id: number, row: any) => void;
    onDeleteConfirm?: (id: number) => void;
    /** trying to custom header table? use this*/
    customHeader?: JSX.Element;
    customField?: ({ field, setValue, defaultField, }: {
        field: FieldProperties;
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
        value: string | number | boolean;
    }) => JSX.Element;
    customDetailField?: ({ field, setValue, defaultField, value, }: {
        field: FieldProperties;
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
        value: string | number | boolean;
    }) => JSX.Element;
    customCreateField?: ({ field, setValue, defaultField, }: {
        field: FieldProperties;
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
        value: string | number | boolean;
    }) => JSX.Element;
    textSubmitButton?: string;
    customFilterField?: ({ field, setValue, defaultField, }: {
        field: [string, FieldProperties];
        setValue: UseFormSetValue<FieldValues>;
        defaultField: JSX.Element;
    }) => JSX.Element;
    /** Custom text column Aksi */
    labelAction?: string;
    message?: {
        success_create_title?: string;
        success_create_text?: string;
        success_edit_title?: string;
        success_edit_text?: string;
        success_delete_title?: string;
        success_delete_text?: string;
    };
    /** https://tailwindcss.com/docs/table-layout */
    layout?: 'auto' | 'fixed';
    canFilter?: boolean;
    tableConfig?: TableConfig;
    customActionCell?: (data: {
        [x: string]: any;
    }) => JSX.Element;
    customButtonDiagram?: ({ ButtonDiagram }: {
        ButtonDiagram: () => JSX.Element;
    }) => void;
    customButtonFilter?: ({ ButtonFilter }: {
        ButtonFilter: () => JSX.Element;
    }) => void;
    customButtonBpmn?: ({ available_task, rowValue, usertaskMapping, }: {
        available_task: any;
        rowValue: {
            [x: string]: any;
        };
        usertaskMapping: UserTaskMapping[];
    }) => JSX.Element;
    customBadgeDiagram?: (task_id: string) => string;
    defaultOrder?: 'asc' | 'desc';
    defaultSortBy?: string;
    subHeader?: JSX.Element;
    onClickBulk?: () => void;
    customButtonCreate?: (ButtonWithModal: JSX.Element, ButtonWithAction: JSX.Element, data?: {
        [x: string]: any;
    }[]) => JSX.Element;
    customButtonDetail?: (ButtonWithModal: JSX.Element, ButtonWithAction: JSX.Element, row: {
        [x: string]: any;
    }) => JSX.Element;
    customButtonEdit?: (ButtonWithModal: JSX.Element, ButtonWithAction: JSX.Element, row: {
        [x: string]: any;
    }) => JSX.Element;
    customButtonDelete?: (defaultButton: () => JSX.Element, row: {
        [x: string]: any;
    }) => JSX.Element;
    customButtonBulk?: (defaultButton: () => JSX.Element) => JSX.Element;
    extraActionButton?: (data: {
        [x: string]: any;
    }) => JSX.Element;
    extraButton?: () => JSX.Element | null;
    /** If you want show bpmn manual */
    showBpmn?: boolean;
    hideActionColumn?: boolean;
    /** If you want hide table */
    hideTable?: boolean;
    readonly?: boolean;
    customBulkCell?: ({ row }: {
        row: {
            [x: string]: any;
        };
    }) => JSX.Element;
    onSelectAll?: ({ data, selectedAll, }: {
        data?: {
            [x: string]: any;
        }[];
        selectedAll: boolean;
        setSelectedAll: Dispatch<SetStateAction<boolean>>;
    }) => void;
    tooltip?: {
        button_create?: string;
        button_edit?: string;
        button_detail?: string;
        button_delete?: string;
    };
    bordered?: boolean;
}

declare interface TableLowcodeProps_2 {
    spec?: TableSpec_2
    data?: { [x: string]: any }[]
    /**
     * when u facing issue for example API endpoint for list data not same as API endpoint for spec, used this for overide endpoint for list data
     * @param string eg '/api/crud/custom-path'
     */
    dataPath?: string

    title?: string
    /** base API url (lowcode spec) */
    baseUrl: string
    specPath?: string
    /**  state for refetching data*/
    renderState?: number
    /**  setter state for refeching data*/
    setRenderState?: Dispatch<SetStateAction<number>>
    /**  state for refetching data*/
    extendQuery?: { [x: string]: string }
    /**  setter state for refeching data*/
    setExtendQuery?: Dispatch<SetStateAction<{ [x: string]: string }>>
    /**  state to store filter data*/
    filterBy?: { [x: string]: any }
    /**  setter for set filter data*/
    setFilterBy?: Dispatch<SetStateAction<{ [x: string]: any } | undefined>>
    /**  state for store current searching data*/
    search?: string
    /**  setter for set current searching data*/
    setSearch?: Dispatch<SetStateAction<string | undefined>>
    /**  state to store page config*/
    pageConfig?: { limit: number; page: number }
    /**  setter to set page config*/
    setPageConfig?: Dispatch<SetStateAction<{ limit: number; page: number }>>
    canBulk?: boolean
    /**  state to store selected row*/
    selectedRow?: number[]
    /**  setter to set selected row*/
    setSelectedRow?: Dispatch<SetStateAction<number[]>>
    /**  render custom cell table base for ex custom by fields.name*/
    customCell?: ({
        name,
        fields,
        value,
        rowValue,
        defaultCell,
    }: {
        name: string
        fields: { [x: string]: FieldProperties_2 }
        // cell value
        value: any
        // row value
        rowValue: { [x: string]: any }
        defaultCell: JSX.Element
    }) => JSX.Element
    /**  will be trigger when create button clicked*/
    onClickCreate?: () => void
    /**  will be trigger when button edit clicked*/
    onClickEdit?: (fieldSpec: FieldActionProperties_2, id: number | string, row: any) => void
    /**  will be trigger when button delete clicked*/
    onClickDelete?: (fieldSpec: FieldActionProperties_2, id: number | string, row: any) => void
    /**  will be trigger when button detail clicked*/
    onClickDetail?: (id: number, row: any) => void
    onDeleteConfirm?: (id: number) => void
    /** trying to custom header table? use this*/
    customHeader?: JSX.Element
    customField?: ({
        field,
        setValue,
        defaultField,
    }: {
        field: FieldProperties_2
        setValue: UseFormSetValue<FieldValues>
        defaultField: JSX.Element
        value: string | number | boolean
    }) => JSX.Element
    customDetailField?: ({
        field,
        setValue,
        defaultField,
        value,
    }: {
        field: FieldProperties_2
        setValue: UseFormSetValue<FieldValues>
        defaultField: JSX.Element
        value: string | number | boolean
    }) => JSX.Element
    customCreateField?: ({
        field,
        setValue,
        defaultField,
    }: {
        field: FieldProperties_2
        setValue: UseFormSetValue<FieldValues>
        defaultField: JSX.Element
        value: string | number | boolean
    }) => JSX.Element
    textSubmitButton?: string
    customFilterField?: ({
        field,
        setValue,
        defaultField,
    }: {
        field: [string, FieldProperties_2]
        setValue: UseFormSetValue<FieldValues>
        defaultField: JSX.Element
    }) => JSX.Element
    /** Custom text column Aksi */
    labelAction?: string
    message?: {
        success_create_title?: string
        success_create_text?: string
        success_edit_title?: string
        success_edit_text?: string
        success_delete_title?: string
        success_delete_text?: string
    }
    /** https://tailwindcss.com/docs/table-layout */
    layout?: 'auto' | 'fixed'
    canFilter?: boolean
    tableConfig?: TableConfig_2
    customActionCell?: (data: { [x: string]: any }) => JSX.Element
    customButtonDiagram?: ({ ButtonDiagram }: { ButtonDiagram: () => JSX.Element }) => void
    customButtonFilter?: ({ ButtonFilter }: { ButtonFilter: () => JSX.Element }) => void
    customButtonBpmn?: ({
        available_task,
        rowValue,
        usertaskMapping,
    }: {
        available_task: any
        rowValue: { [x: string]: any }
        usertaskMapping: UserTaskMapping_2[]
    }) => JSX.Element
    customBadgeDiagram?: (task_id: string) => string
    defaultOrder?: 'asc' | 'desc'
    defaultSortBy?: string
    subHeader?: JSX.Element
    onClickBulk?: () => void
    customButtonCreate?: (
    // Button edit feature using modal
    ButtonWithModal: JSX.Element,
    // Button edit feature using onClickEdit
    ButtonWithAction: JSX.Element,
    data?: { [x: string]: any }[]
    ) => JSX.Element
    customButtonDetail?: (
    // Button edit feature using modal
    ButtonWithModal: JSX.Element,
    // Button edit feature using onClickEdit
    ButtonWithAction: JSX.Element,
    row: { [x: string]: any }
    ) => JSX.Element
    customButtonEdit?: (
    // Button edit feature using modal
    ButtonWithModal: JSX.Element,
    // Button edit feature using onClickEdit
    ButtonWithAction: JSX.Element,
    row: { [x: string]: any }
    ) => JSX.Element
    customButtonDelete?: (defaultButton: () => JSX.Element, row: { [x: string]: any }) => JSX.Element
    customButtonBulk?: (defaultButton: () => JSX.Element) => JSX.Element
    extraActionButton?: (data: { [x: string]: any }) => JSX.Element
    extraButton?: () => JSX.Element | null

    /** If you want show bpmn manual */
    showBpmn?: boolean

    hideActionColumn?: boolean

    /** If you want hide table */
    hideTable?: boolean

    readonly?: boolean
    customBulkCell?: ({ row }: { row: { [x: string]: any } }) => JSX.Element
    onSelectAll?: ({
        data,
        selectedAll,
    }: {
        data?: { [x: string]: any }[]
        selectedAll: boolean
        setSelectedAll: Dispatch<SetStateAction<boolean>>
    }) => void
    tooltip?: {
        button_create?: string
        button_edit?: string
        button_detail?: string
        button_delete?: string
    }
    bordered?: boolean
}

export declare const TableLowcodeView: FC<TableLowcodeViewProps>;

declare interface TableLowcodeViewProps {
    tableSpec: TableSpec | undefined;
    tableData: {
        [x: string]: any;
    }[] | undefined;
    pagination: PaginationLowcode | undefined;
    selectedAll: boolean;
    setSelectedAll: Dispatch<SetStateAction<boolean>>;
    sortBy?: string;
    setSortBy?: Dispatch<SetStateAction<string | undefined>>;
    orderBy?: 'asc' | 'desc';
    setOrderBy?: Dispatch<SetStateAction<'asc' | 'desc' | undefined>>;
}

export declare const TableNested: FC<TableNestedProps>;

declare interface TableNestedProps {
    spec?: TableSpec;
    /** callback to get value */
    onSubmit?: (value?: number[]) => void;
    /** props to set defaultvalue */
    defaultValue?: number[];
    canSelect?: boolean;
    /** limit row selected, eg: limit={1} means table should select maximum 1 row */
    limit?: number;
}

export declare interface TableSpec {
    show_as_menu: boolean;
    base_url: string;
    name: string;
    can_bulk: boolean;
    can_create: boolean;
    can_delete: boolean;
    can_edit: boolean;
    can_detail: boolean;
    path: string;
    is_bpmn: boolean;
    is_usertask: boolean;
    label: string;
    description: string;
    header_action: HeaderAction[];
    field_action: FieldActionProperties[];
    fields: {
        [x: string]: FieldProperties;
    };
    usertask_mapping?: UserTaskMapping[];
    languages?: {
        pagination_info?: string;
        empty_data?: string;
    };
}

declare interface TableSpec_2 {
    show_as_menu: boolean
    base_url: string
    name: string
    can_bulk: boolean
    can_create: boolean
    can_delete: boolean
    can_edit: boolean
    can_detail: boolean
    path: string
    is_bpmn: boolean
    is_usertask: boolean
    label: string
    description: string
    header_action: HeaderAction_2[]
    field_action: FieldActionProperties_2[]
    fields: {
        [x: string]: FieldProperties_2
    }
    usertask_mapping?: UserTaskMapping_2[]
    languages?: {
        pagination_info?: string
        empty_data?: string
    }
}

/**
 * Tag - cused for categorize content with a keyword.
 */
export declare const Tag: ForwardRefExoticComponent<TagProps & RefAttributes<HTMLDivElement>>;

export declare interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
    /** Tag prefix */
    prefix?: boolean | ReactNode;
    /** Css class for Tag prefix, only available when prefix type is boolean */
    prefixClass?: string;
    /** Tag suffix */
    suffix?: boolean | ReactNode;
    /** Css class for Tag suffix, only available when suffix type is boolean */
    suffixClass?: string;
}

export declare const Task: FC<TaskType>;

export declare interface TaskType {
    process_definition: [
        {
        process_defintion_key: string;
        process_defintion_path: string;
        process_defintion_label: string;
    }
    ];
    renderChildren: Function;
    base_url: string;
    taskListLabel: string;
    taskEndpoint: string;
}

export declare interface Theme {
    table_wrapper?: string;
    table?: string;
    table_title?: string;
    table_head?: string;
    table_head_row?: string;
    table_head_col?: string;
    table_head_col_no?: string;
    table_head_col_bulk?: string;
    table_head_col_bulk_item?: string;
    table_head_col_action?: string;
    table_body_row?: string;
    table_body_col?: string;
    table_body_col_action?: string;
    checkbox?: string;
}

export declare const themeConfig: Theme;

export declare const ThemeContext: Context<Theme | null>;

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export declare const Tooltip: FC<TooltipProps>;

export declare interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'content' | 'style'>> {
    animation?: false | `duration-${number}`;
    arrow?: boolean;
    content: ReactNode;
    placement?: 'auto' | Placement;
    style?: 'dark' | 'light' | 'auto';
    trigger?: 'hover' | 'click';
}

export declare interface UserTaskMapping {
    id: string;
    label: string;
    type: string;
    url: string;
}

declare interface UserTaskMapping_2 {
    id: string
    label: string
    type: string
    url: string
}

export { }
