// ==UserScript==
// @name         practice on JSMinesweeper
// @namespace    https://davidnhill.github.io/JSMinesweeper/
// @version      0.1
// @description  JSMinesweeperで習熟・ストリークの練習をするとき用に少し改変する
// @author       nagao
// @match        https://davidnhill.github.io/JSMinesweeper/
// @icon         https://davidnhill.github.io/JSMinesweeper/resources/images/flagged.png
// @grant        none
// ==/UserScript==

//やってること
//・ページを開いたとき、Fast mode(簡単な確定を自動でプレイ)にチェックを入れる。
//・ページを開いたとき、Show hints(ヒントを常に表示)のチェックを外す。
//・Analyse(ヒントを表示)を押したとき、地雷の確率も表示する。Minesweeper Onlineのヒントの挙動に近くなる。
//Auto play(すべての確定を自動でプレイ)にする場合は、'fastPlay'のところを'autoplay'に書きかえる。

{
    'use strict';
	document.getElementById('fastPlay').checked = true;
	document.getElementById('showhints').checked = false;
	document.getElementById('AnalysisButton').removeAttribute('onclick');
	document.getElementById('AnalysisButton').addEventListener('click', async _ => {
		document.getElementById('overlay').value = 'mine';
		await doAnalysis();
		await new Promise(resolve => setTimeout(resolve, 100));
		document.getElementById('overlay').value = 'none';
	});
}