export interface Dialog{
    title: string,
    message: string,
    btnOptions: DialogButtonOptions,
    size: string
}
  
export interface DialogButtonOptions {
    text: string
    fn: Function,
    color: DialogColors
}

export enum DialogColors{
    WARN = 'warn',
    PRIMARY = 'primary',
    ACCENT = 'accent',
}