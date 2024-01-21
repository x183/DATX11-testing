"use client"
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useState, useCallback } from 'react';

export default function Home() {
	const [value, setValue] = useState("print('hello world!')");
	const onChange = useCallback((val: any, viewUpdate: any) => {
		console.log('val:', val);
		setValue(val);
	}, []);
	return (
		<div>
			<CodeMirror value={value} height="200px" extensions={[python()]} onChange={onChange} />
			<input type="button" value="Run" onClick={async () => {
				fetch("/api/exec",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ code: value })
					}
				)
			}} />
		</div>);
}
