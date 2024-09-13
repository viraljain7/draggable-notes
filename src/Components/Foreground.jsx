import { useRef } from "react"
import Card from "./Card"
function Foreground() {
    const foregroundRef = useRef();
    const data = [
        {
            desc: 'The project report for the last quarter is ready for review and download.',
            fileSize: "1.5mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: 'System update files for version 1.2.3, scheduled for automatic deployment.',
            fileSize: "3.2mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Later", tagColor: "gray" }
        },
        {
            desc: 'Final presentation slides for the upcoming client meeting, pending approval.',
            fileSize: "0.89mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: 'Invoice and receipt for the recent hardware purchases, available for download.',
            fileSize: "0.3mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Processing", tagColor: "yellow" }
        },
        {
            desc: 'Backup files from the server, created during the last routine maintenance.',
            fileSize: "5.7mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Backup", tagColor: "red" }
        },
        {
            desc: 'The monthly financial report, currently being audited and processed.',
            fileSize: "2.1mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Under Audit", tagColor: "orange" }
        },
        {
            desc: 'Customer feedback data collected through the online survey, ready for download.',
            fileSize: "4.8mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Ready for Review", tagColor: "purple" }
        }
    ];

    return (
        <div ref={foregroundRef} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-6 flex-wrap p-5 ">
            {data.map((item, index) => (
                <Card
                    key={index}
                    desc={item.desc}
                    fileSize={item.fileSize}
                    close={item.close}
                    tag={item.tag}
                    tagTitle={item.tag.tagTitle}
                    reference={foregroundRef}
                />)
            )}
        </div>

    )
}

export default Foreground
