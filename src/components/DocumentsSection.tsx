const DocumentsSection = () => {
  const documents = [
    {
      title: "Topic Assessment",
      date: "2024/09/25",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1d9SgEeEH54t8HVWH8M04BC9F_A3_VppV?usp=sharing",
    },
    {
      title: "Project Charter",
      date: "2024/11/15",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1Ly-cPWT2J3hMUClzJNb7wTkZn_rW2kt8?usp=sharing",
    },
    {
      title: "Project Proposal",
      date: "2024/12/22",
      type: "Individual",
      downloadLink:
        "https://drive.google.com/drive/folders/1l6mSZ6ElnUzS78Wfe1SU7u3cU1S35t68?usp=sharing",
    },
    // {
    //   title: "Status Documents I",
    //   date: "2025/02/05",
    //   type: "Individual",
    //   downloadLink: "/documents/status-documents-1.pdf",
    // },
    {
      title: "Research Paper",
      date: "2025/05/13",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/17pqbxGbR-Wjdw7-Srur-LpM2W3Zzwh8j?usp=sharing",
    },
    {
      title: "Final Report",
      date: "2025/05/13",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1zE4ISMpZ5Go196uvH9bBsezma14Qa-uY?usp=drive_link",
    },
  ];

  const presentations = [
    {
      title: "Project Proposal",
      date: "2024/12/14",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1l6mSZ6ElnUzS78Wfe1SU7u3cU1S35t68?usp=sharing",
    },
    {
      title: "Progress Presentation I",
      date: "2025/02/08",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1sHROpCS_YlOB6dQe-SlRmh1r8TsIW1Kh?usp=drive_link",
    },
    {
      title: "Progress Presentation II",
      date: "2025/04/18",
      type: "Group",
      downloadLink:
        "https://drive.google.com/drive/folders/1rspZQGRU5svhF1y2VrKKT39xvplY_1NN?usp=sharing",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#2e7d32" }}
        >
          Documents & Presentations
        </h2>

        {/* Documents */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8" style={{ color: "#2e7d32" }}>
            Documents
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {documents.map((doc: any, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">{doc.title}</h4>
                      {doc.date && (
                        <p className="text-sm text-gray-600">
                          Submitted on {doc.date}
                        </p>
                      )}
                      {!doc.date && doc.status && (
                        <p className="text-sm text-gray-600">{doc.status}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 justify-end w-full sm:w-auto">
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                      {doc.type}
                    </span>
                    {doc.downloadLink ? (
                      <a
                        href={doc.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-700 text-white px-4 py-2 rounded flex items-center text-sm hover:bg-green-800 transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600 italic">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presentations */}
        <div>
          <h3 className="text-2xl font-bold mb-8" style={{ color: "#2e7d32" }}>
            Presentations
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {presentations.map((presentation, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">{presentation.title}</h4>
                      <p className="text-sm text-gray-600">
                        Submitted on {presentation.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 justify-end w-full sm:w-auto">
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                      {presentation.type}
                    </span>
                    <a
                      href={presentation.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-700 text-white px-4 py-2 rounded flex items-center text-sm hover:bg-green-800 transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
