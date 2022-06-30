import format  from 'date-fns/format'

export default function useFormatedDate(str, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
    return format(str.toString(), outputFormat)
}