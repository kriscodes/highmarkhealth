import React from "react";

const parseCsvToRowsAndColumn = (csvText, csvColumnDelimiter = "\t") => {
	const rows = csvText.split("\n");
	if (!rows || rows.length === 0) {
		return [];
	}

	return rows.map((row) => row.split(csvColumnDelimiter));
}

const CsvToHtmlTable = ({
	data,
	csvDelimiter,
	hasHeader,
	tableClassName,
	tableRowClassName,
	tableColumnClassName,
	rowKey,
	colKey,
	renderCell
}) => {
	const rowsWithColumns = parseCsvToRowsAndColumn(data.trim(), csvDelimiter);
	let headerRow = undefined;
	if (hasHeader) {
		headerRow = rowsWithColumns.splice(0, 1)[0];
	}

	const renderTableHeader = (row) => {
		if (row && row.map) {
			return (
				<thead>
					<tr>
						{row.map((column, i) => (
							<th key={`header-${i}`}>
								<span onClick={console.log}>{column}</span>
							</th>
						))}
					</tr>
				</thead>
			);
		}
	};

	const renderTableBody = (rows) => {
		if (rows && rows.map) {
			return (
				<tbody>
					{rows.map((row, rowIdx) => (
						<tr
							className={tableRowClassName}
							key={
								typeof rowKey === "function"
									? rowKey(row, rowIdx)
									: rowIdx
							}>
							{row.map &&
								row.map((column, colIdx) => (
									<td
										className={tableColumnClassName}
										key={
											typeof rowKey === "function"
												? colKey(row, colIdx, rowIdx)
												: column[colKey]
										}>
										{typeof renderCell === "function"
											? renderCell(column, colIdx, rowIdx)
											: column}
									</td>
								))}
						</tr>
					))}
				</tbody>
			);
		}
	};
  
	return (
		<table className={`csv-html-table ${tableClassName}`}>
			{renderTableHeader(headerRow)}
			{renderTableBody(rowsWithColumns)}
		</table>
	);
};

CsvToHtmlTable.defaultProps = {
	data: "",
	rowKey: (row, rowIdx) => `row-${rowIdx}`,
	colKey: (col, colIdx, rowIdx) => `col-${colIdx}`,
	hasHeader: true,
	csvDelimiter: ",",
	tableClassName: "",
	tableRowClassName: "",
	tableColumnClassName: ""
};

export default CsvToHtmlTable;
