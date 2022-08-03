let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/react/elements/elements-vite/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +61 pages/Events.tsx
badd +17 eth.ts
badd +19 App.tsx
badd +4 pages/Dashboard.tsx
badd +7 pages/Login.tsx
badd +14 pages/Register.tsx
badd +44 api/api.ts
badd +1 api/request.ts
badd +1 components/CharityList.tsx
badd +1 api/CharityContractABI.ts
badd +10 pages/Home.tsx
badd +78 pages/CreateEvent.tsx
badd +1 pages/styles.css
badd +59 components/Header.tsx
badd +1 pages/AdminLogin.tsx
argglobal
%argdel
edit pages/CreateEvent.tsx
argglobal
balt pages/AdminLogin.tsx
let s:l = 91 - ((28 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 91
normal! 026|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
