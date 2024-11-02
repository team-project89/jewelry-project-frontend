import { RiSortNumberAsc } from "react-icons/ri"

export default function Table({ children }) {
    return(
        <div className="bg-secondary-200 overflow-x-auto rounded-3xl shadow-xl">
            <table>{ children }</table>
        </div>
    )
}

function TableHeader({ children }) {
    return(
        <thead>
            <tr className="title-row ">
                <td><RiSortNumberAsc className="w-6 h-6"/></td>
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return(
        <tbody>{ children }</tbody>
    )
}

function TableRow({ children }) {
    return(
        <tr className="hover:bg-secondary-300 transition-all duration-500">{ children }</tr>
    )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow