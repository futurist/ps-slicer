'***********************************************************************************************
'*
'*	Scripting Gallery v1.0.0 - Batch Photoshop Gallery Generator
'*	Copyright (C) 2011 Alexander Spiridonov a.k.a. Spirik (http://spirik.ru)
'*	For the latest versions available and documentation visit http://sg.spirik.ru
'*
'***********************************************************************************************
'*
'*	Licensed under GNU General Public License version 3 or later
'*
'*	This program is free software: you can redistribute it and/or modify
'*	it under the terms of the GNU General Public License as published by
'*	the Free Software Foundation, either version 3 of the License, or
'*	(at your option) any later version.
'*
'*	This program is distributed in the hope that it will be useful,
'*	but WITHOUT ANY WARRANTY; without even the implied warranty of
'*	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
'*	GNU General Public License for more details.
'*
'*	You should have received a copy of the GNU General Public License
'*	along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
'*
'***********************************************************************************************

'Global variables declaration
Dim DontAskMeAnything
Dim SuppressDialogs
Dim b_Folder
Dim s_Folder
Dim WorkMode
Dim NestedDirs
Dim SaveInOneFolder
Dim ExcludeDirsPrefix
Dim ResizeMode
Dim Size
Dim LogoFile
Dim Position
Dim ThumbDifferent
Dim ThumbWidth
Dim ThumbHeight
Dim ThumbWidth_Horiz
Dim ThumbHeight_Horiz
Dim FrameFile
Dim FrameFile_Horiz
Dim ThumbWideMost
Dim ThumbDy
Dim ThumbScaleFactor
Dim Opacity
Dim oDx, oDy
Dim ResizeInterpolationB
Dim ResizeInterpolationS
Dim SharpenB
Dim SharpenB_USM_Amount
Dim SharpenB_USM_Radius
Dim SharpenB_USM_Threshold
Dim SharpenS
Dim SharpenS_USM_Amount
Dim SharpenS_USM_Radius
Dim SharpenS_USM_Threshold
Dim DeleteOriginals
Dim SaveOptimized
Dim OptimizeQuality
Dim LowerCase
Dim Rename
Dim RenamePrefix
Dim RenameSuffixS
Dim Digits
Dim CounterStartValue
Dim Quit

'=====================================================================================================================================
'Setting up script parameters
'=====================================================================================================================================

'General settings
DontAskMeAnything = false	'Toggles "silent" mode of the script. While in "silent" mode the only question you'll be asked is the path to working directory
							'false - "Standard" mode: all input dialogs are active
							'true - "Silent" mode: most of input dialogs are suppressed, except the prompt to input working directory,
							'settings values found in this code will be used
SuppressDialogs = false	'Controls whether the script should suppress native Photoshop warnings (such as Color Profile Mismatch warning) or not
						'false - All error and warning messages are displayed to user
						'true - All error and warning messages (as well as other Photoshop dialog windows) are suppressed not to bother you

b_Folder = "b"	'Folder name for "Big" output images
s_Folder = "s"	'Folder name for thumbnails

WorkMode = 1	'0 - Do not create thumbnails
				'1 -  Create thumbnails
NestedDirs = true	'false - Do not process files in subdirectories
					'true - Process files in subdirectories
SaveInOneFolder = false	'false - Output folders will be created inside every processing directory and will contain output images of that directory
						'true - Output folders will be created as child folders of initial directory and will contain output images from every processed directory
ExcludeDirsPrefix = "$"	'Directories which names start with this character sequence won't be processed (even if NestedDirs is set to true) 

'"Big" images settings
ResizeMode = 2	'1 - Image will be resized proportionally with its widest dimension (whether width or height) downscaled to size specified in Size setting
				'2 - Image will be resized proportionally with its height downscaled to size specified in Size setting
				'3 - Image will be resized proportionally with its width downscaled to size specified in Size setting
Size = 600		'Size to which source images will be scaled according to ResizeMode setting
LogoFile = "logo.png"	'Filename of image (watermark) in the home directory of the script which should be pasted above the source image while generating "Big" output image,
						'if set to "" (empty) nothing will be pasted above the source image
Position = 2	'Position on the source image at which logo (specified in LogoFile setting) will be pasted 
				'0 - Center of source image
				'1 - Right-bottom corner
				'2 - Left-bottom corner
				'3 - Left-top corner
				'4 - Right-top corner
				'5 - Center-bottom
Opacity = 100	'Opacity of the pasted logo
oDx = 7			'Shift of the logo from the source image's bounds if Position is set to 1, 2, 3, 4; oDx -  Horizontal shift in px, oDy - Vertical shift in px
oDy = 8

'Thumbnail settings
ThumbDifferent = true	'Toggles using different sizes for thumbnails based on aspect ratio (AR = height/width) of the source image
ThumbWidth = 60		'Width of thumbnails. If ThumbDifferent is set to true - width of thumbnails of images with AR > 1 only
ThumbHeight = 60	'Height of thumbnails. If ThumbDifferent is set to true - height of thumbnails of images with AR > 1 only
ThumbWidth_Horiz = 140	'Width of thumbnails of images with AR <= 1. Works if ThumbDifferent is set to true
ThumbHeight_Horiz = 60	'Height of thumbnails of images with AR <= 1. Works if ThumbDifferent is set to true

ThumbWideMost = true	'Defines the way script should cut thumbnails off from the source image
						'false - Thumbnail will be cut off from the source image preserving the original scale
						'true - The source image will be properly scaled to fit the dimensions of thumbnail
ThumbScaleFactor = 5	'Defines the indent of thumbnail from the edges of bounding box of the source image. Works if ThumbWideMost is set to true
ThumbDy = -1	'Defines the vertical indent of thumbnail from the top edge of image: if ThumbWideMost = false - in px; if ThumbWideMost = true - in %
				'if ThumbDy is set to -1 - no vertical indent is applied, thumbnail is cut off from the center of the source image

FrameFile = "frame.png"	'Filename of image which should be pasted above thumbnail (in order to make a frame),
						'if ThumbDifferent is set to true - frame for thumbnails of images with AR > 1 only
						'if set to "" (empty) nothing will be pasted above the thumbnail
FrameFile_Horiz = "frame_horiz.png" 'Filename of image which should be pasted above thumbnail of image with AR <= 1,
						'works if ThumbDifferent is set to true

'Quality settings
ResizeInterpolationB = 4	'Defines the resampling method used for scaling while generating "big" images
ResizeInterpolationS = 5	'Defines the resampling method used for scaling while generating thumbnails
							'1 - NoResampling
							'2 - NearestNeighbor
							'3 - Bilinear
							'4 - Bicubic
							'5 - BicubicSharper
							'6 - BicubicSmoother
SharpenB = true	'Toggles the sharpening of resulting "Big" images
'Unsharp Mask Filter settings used for sharpening "Big" output images while SharpenB is set to true:
SharpenB_USM_Amount = 30	'Amount
SharpenB_USM_Radius = 0.5	'Radius
SharpenB_USM_Threshold = 0	'Threshold
SharpenS = true	'Toggles the sharpening of resulting thumbnails
'Unsharp Mask Filter settings used for sharpening thumbnails while SharpenS is set to true:
SharpenS_USM_Amount = 50	'Amount
SharpenS_USM_Radius = 1.0	'Radius
SharpenS_USM_Threshold = 0	'Threshold

'Output settings
DeleteOriginals = false	'Controls whether the script should delete the original image file after processing it
SaveOptimized = true	'Controls whether the script should optimize output images before saving or not
OptimizeQuality = 55	'Defines the quality the output images will be saved with. Works if SaveOptimized is set to true
LowerCase = true	'Controls whether the script should convert all initial filenames to lowercase before saving
Rename = true		'Controls whether the script should rename output files when saving. Renaming includes adding counter value and, optionally, suffix and prefix
					'Note: if set to false and SaveInOneFolder = true, output files with the same names will be overwriting each other
					'in order of script processing them in queue
RenamePrefix = "g"	'Defines the string that adds to original filename as prefix. Works if Rename is set to true
RenameSuffixS = ""	'Defines the string that adds to thumbnail filename as suffix (works regardless of Rename setting and applies for thumbnails only)
Digits = 2			'Defines the number of digits in counter used in renaming of output files
CounterStartValue = 1	'Defines the start value of counter used in renaming of output files

'After-party settings
Quit = false	'Controls whether the script should close Photoshop after performing its task or not

'=====================================================================================================================================
'Start (preparing data)
'=====================================================================================================================================

Dim Files
Dim appRef
Dim docRef
Dim docLogoRef
Dim docFrameRef
Dim docFrameRef_Horiz
Dim originalState
Dim exportOptions
Dim jpgSaveOptions
Dim cnt

'Global variables regarding source image and its new filename
Dim fileFullName, fileName, filePath, newFileName
Dim Width, Height, AR

Dim fso
Set fso = CreateObject("Scripting.FileSystemObject")

Dim Path
Dim ScriptPath
ScriptPath = Wscript.ScriptFullName
ScriptPath = Left(ScriptPath, Len(ScriptPath)-Len(Wscript.ScriptName))
Path = ScriptPath
'Initial directory
'Path = "Y:\Your\dummy\path"
Path = InputBox("Enter path to working folder:","Specifying initial directory", Path)

If Path<>"" Then
	If DontAskMeAnything Then
		PrepareData
		Photoshopping
	Else
		WorkMode = InputBox("Enter work mode:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
		"0 - Do not create thumbnails" & Chr(13) & Chr(10) & "1 - Create thumbnails and subfolders b and s",_
		"Specifying work mode", WorkMode)
		If WorkMode<>"" Then
			NestedDirsVar = InputBox("Processing files in nested subdirectories:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
			"0 - Do not process files in subdirectories" & Chr(13) & Chr(10) & "1 - Process files in subdirectories",_
			"Processing files in subdirectories", -CInt(NestedDirs))
			If NestedDirsVar<>"" Then
				If NestedDirsVar = "1" Then
					NestedDirs = true
				Else
					NestedDirs = false
				End If
				ExcludeDirsPrefix = InputBox("Directories which names start with this character sequence won't be processed:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
				"(if not set - all subdirectories will be processed)",_
				"Excluding subdirectories", ExcludeDirsPrefix)
				ResizeMode = InputBox("Enter resize mode:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
				"1 - Image will be resized proportionally with its widest dimension (whether width or height) downscaled to specified size" & Chr(13) & Chr(10) & "2 - Image will be resized proportionally with its height downscaled to specified size" & Chr(13) & Chr(10) & "3 - Image will be resized proportionally with its width downscaled to specified size",_
				"Specifying resize mode", ResizeMode)
				If ResizeMode<>"" Then
					Size = InputBox("Enter size to which source images will be downscaled while creating 'Big' output images, px:","Specifying size", Size)
					If Size<>"" Then
						Do
							LogoFile = InputBox("Enter Logo filename:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
							"(file should be placed in the home directory of the script, " &_
							"if not set - nothing will be pasted above the source image)","Specifying Logo (watermark)", LogoFile)
							If (LogoFile <> "") and not(fso.FileExists(ScriptPath & LogoFile)) Then
								MsgBox("Logo file '" & LogoFile & "' wasn't found in home directory of the script!" & Chr(13) & Chr(10) & "Please, re-enter.")
							Else
								Exit Do
							End If
						Loop
						If LogoFile<>"" Then
							Position = InputBox(_
							"Enter position of the Logo:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
							"0 - Center" & Chr(13) & Chr(10) &_
							"1 - Right-bottom corner" & Chr(13) & Chr(10) &_
							"2 - Left-bottom corner" & Chr(13) & Chr(10) &_
							"3 - Left-top corner" & Chr(13) & Chr(10) &_
							"4 - Right-top corner" & Chr(13) & Chr(10) &_
							"5 - Center-bottom"_
							,"Specifying Logo position", Position)
						End If
						If Position<>"" Then
							If WorkMode<>"0" Then
								
								ThumbDifferentVar = InputBox("Enter thumbnail creation mode:"& Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
								"0 - Thumbnails are the same size" & Chr(13) & Chr(10) &_
								"1 - Thumbnails has different sizes based on aspect ratio (AR = height/width) of the source image" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
								"(pressing 'Cancel' will toggle mode with one-sized thumbnail creation)"_
								,"Specifying thumbnail creation mode", -CInt(ThumbDifferent))
								If ThumbDifferentVar = "1" Then
									ThumbDifferent = true
								Else
									ThumbDifferent = false
								End If
								If ThumbDifferent Then
									ThumbWidth_Horiz = InputBox("Enter width of thumbnail for 'horizontal' images with AR <= 1, px:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
									"(pressing 'Cancel' will toggle mode with one-sized thumbnail creation)"_
									,"Specifying thumbnail width for AR <= 1", ThumbWidth_Horiz)
									If ThumbWidth_Horiz<>"" Then
										ThumbHeight_Horiz = InputBox("Enter height of thumbnail for 'horizontal' images with AR <= 1, px:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
										"(pressing 'Cancel' will toggle mode with one-sized thumbnail creation)"_
										,"Specifying thumbnail height for AR <= 1", ThumbHeight_Horiz)
										If ThumbHeight_Horiz="" Then
											ThumbDifferent = false
										End If
									Else
										ThumbDifferent = false
									End If
								End If
								
								Dim ThumbWidthInputText
								Dim ThumbHeightInputText
								If ThumbDifferent Then
									ThumbWidthInputText = "Enter width of thumbnail for 'vertical' images with AR > 1, px:"
									ThumbHeightInputText = "Enter height of thumbnail for 'vertical' images with AR > 1, px:"
								else
									ThumbWidthInputText = "Enter width of thumbnail, px:"
									ThumbHeightInputText = "Enter height of thumbnail, px:"
								End If
								ThumbWidth = InputBox(ThumbWidthInputText,"Specifying thumbnail width", ThumbWidth)
								If ThumbWidth<>"" Then
									ThumbHeight = InputBox(ThumbHeightInputText,"Specifying thumbnail height", ThumbHeight)
									If ThumbHeight<>"" Then
										If ThumbWideMost Then
											'Entering ThumbScaleFactor
											ThumbScaleFactor = InputBox("Enter the indent of thumbnail from the edges of bounding box of the source image, %" & Chr(13) & Chr(10) & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
											"(press 'Cancel' if none indent is needed)","Specifying thumbnail indent from edges", ThumbScaleFactor)
											If (ThumbScaleFactor="") Or (ThumbScaleFactor > 100) Or (ThumbScaleFactor < 0) Then
												ThumbScaleFactor = 0
											End If
											'Enter ThumbDy
											ThumbDy = InputBox("Enter the vertical indent of thumbnail from the top edge of image, %:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
											"(the indent will be added to indent from edges specified on previous step;"& Chr(13) & Chr(10) &"press 'Cancel' or enter '-1' if none indent is needed)","Specifying thumbnail vertical indent", ThumbDy)
											If (ThumbDy="") Or (ThumbDy > 100) Or (ThumbDy < 0) Then
												ThumbDy = -1
											End If
										Else
											ThumbScaleFactor = 0
											ThumbDy = InputBox("Enter the vertical indent of thumbnail from the top edge of image, px:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
											"(press 'Cancel' or enter '-1' if none indent is needed)","Specifying thumbnail vertical indent", ThumbDy)
											If (ThumbDy="") Or (ThumbDy < 0) Then
												ThumbDy = -1
											End If
										End If
										
										If ThumbDifferent Then
											Do
												FrameFile_Horiz = InputBox("Enter Frame filename for thumbnails for 'horizontal' images with AR <= 1:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
												"(file should be placed in the home directory of the script, " &_
												"if not set - frame won't be pasted)","Specifying Frame for thumbnails for AR <= 1", FrameFile_Horiz)
												If (FrameFile_Horiz <> "") and not(fso.FileExists(ScriptPath & FrameFile_Horiz)) Then
													MsgBox("Frame file '" & FrameFile_Horiz & "' wasn't found in home directory of the script!" & Chr(13) & Chr(10) & "Please, re-enter.")
												Else
													Exit Do
												End If
											Loop
										End If
										
										If ThumbDifferent Then
											FrameFileInputText = "Enter Frame filename for thumbnails for 'vertical' images with AR > 1:"
										Else
											FrameFileInputText = "Enter Frame filename for thumbnails:"
										End If
										Do
											FrameFile = InputBox(FrameFileInputText & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
											"(file should be placed in the home directory of the script, " &_
											"if not set - frame won't be pasted)","Specifying Frame for thumbnails", FrameFile)
											If (FrameFile <> "") and not(fso.FileExists(ScriptPath & FrameFile)) Then
												MsgBox("Frame file '" & FrameFile & "' wasn't found in home directory of the script!" & Chr(13) & Chr(10) & "Please, re-enter.")
											Else
												Exit Do
											End If
										Loop

										If Rename = true Then
											CounterStartValue = InputBox("Enter start value of counter output files will be renamed with:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
											"(press 'Cancel' to set start value to 1)","Specifying counter value", CounterStartValue)
											If (CounterStartValue = "") Or (CounterStartValue < 0) Then
												CounterStartValue = 1
											End If
										End If
										PrepareData
										Photoshopping
									End If
								End If
							
							
							Else
								If Rename = true Then
									CounterStartValue = InputBox("Enter start value of counter output files will be renamed with:" & Chr(13) & Chr(10) & Chr(13) & Chr(10) &_
									"(press 'Cancel' to set start value to 1)","Specifying counter value", CounterStartValue)
									If (CounterStartValue = "") Or (CounterStartValue < 0) Then
										CounterStartValue = 1
									End If
								End If
								PrepareData
								Photoshopping
							End If
						End If
					End If
				End If
			End If
		End If
	End If
End If

'Processing input data (if necessary) to fit according variable types
Sub PrepareData
	ThumbScaleFactor = ThumbScaleFactor / 100
	If ThumbDy < -1 Then
		ThumbDy = -1
	End If
	If (ThumbWideMost) and (ThumbDy <> -1) Then
		ThumbDy = ThumbDy / 100
	End If
	Files = ListFiles(Path, NestedDirs)
End Sub

'=====================================================================================================================================
'Service routines
'=====================================================================================================================================

Sub PrintList
	Dim i
	Dim s
	Dim List
	List = ListFiles(Path, NestedDirs)
	For i = 1 to UBound(List)
		s = s & List(i) & "; "
	Next
	MsgBox s
End Sub

Function ListFiles(Path, NestedDirs)
	Dim fld
	Set fld = fso.GetFolder(Path)

	Dim fileList
	fileList = ListFilesPriv(fld, NestedDirs)
	ListFiles = Split(fileList, ";")
End Function

Function ListFilesPriv(fld, NestedDirs)
	Dim fil
	Dim subfld
	For Each fil In fld.Files
		ListFilesPriv = ListFilesPriv & ";" & fil.Path
	Next
	If NestedDirs Then
		For Each subfld In fld.SubFolders
			If (ExcludeDirsPrefix = "") or (InStr(subfld.Name, ExcludeDirsPrefix) <> 1) Then
				ListFilesPriv = ListFilesPriv & ListFilesPriv(subfld, NestedDirs)
			End If
		Next
	End If
End Function

Function IsGraphicFile(Name)
	Dim myReg
	Set myReg = new RegExp
	myReg.IgnoreCase = true
	myReg.Pattern = ".+(\.jpg|\.jpeg|\.bmp|\.png|\.tif|\.tiff|\.gif)$"
	IsGraphicFile = myReg.Test(Name)
End Function

Function GetFileName(FullName)
	Dim myReg
	Set myReg = new RegExp
	myReg.Pattern = "^(.+\\)"
	GetFileName = myReg.Replace(FullName,"")
End Function

Function ExcludeFileExtension(Name)
	Dim myReg
	Set myReg = new RegExp
	myReg.Pattern = "(\..+)$"
	ExcludeFileExtension = myReg.Replace(Name,"")
End Function

Function GetFilePath(FullName)
	GetFilePath = Left(FullName, Len(FullName)-Len(GetFileName(FullName)))
End Function

Function GetNewEnumeratorName(i, digs, prefix)
	Dim nm, dif
	nm = CStr(i)
	dif = digs - Len(CStr(i))
	If (dif>0) Then
		nm = prefix & String(dif,"0") & i
	Else
		nm = prefix & i
	End If
	GetNewEnumeratorName = nm
End Function

'Adding trailing slash (if needed) 
Function AddTrailingSlash(p)
	Dim myReg
	Set myReg = new RegExp
	myReg.Pattern = "(\\)$"
	If not(myReg.Test(p)) Then
		path = p & "\"
	End If
	AddTrailingSlash = p
End Function

'Creating subfolders (runs for every processing file)
Sub CreateFolders(parentPath)
	parentPath = AddTrailingSlash(parentPath)
	If Not(fso.FolderExists(parentPath & b_Folder)) Then
		fso.CreateFolder(parentPath & b_Folder)
	End If
	If WorkMode<>"0" Then
		If Not(fso.FolderExists(parentPath & s_Folder)) Then
			fso.CreateFolder(parentPath & s_Folder)
		End If
	End If
End Sub

'=====================================================================================================================================
'Working with Photoshop
'=====================================================================================================================================

'Photoshop init, looping through the list of files
'File system specific tasks (e.g. creating the specifc folder based on the name of currently processing image) is supposed to be put in this section
Sub Photoshopping
	If UBound(Files) <> -1 Then
	
		Set appRef = CreateObject( "Photoshop.Application" )

		'Saving initial Photoshop preferences (backing them up)
		Dim startRulerUnits
		Dim startTypeUnits
		startRulerUnits = appRef.Preferences.RulerUnits
		startTypeUnits = appRef.Preferences.TypeUnits
		startDisplayDialogs = appRef.DisplayDialogs

		appRef.Preferences.RulerUnits = 1 'for PsUnits --> 1 (psPixels)
		appRef.Preferences.TypeUnits = 1 'for PsTypeUnits --> 1 (psPixels)
		If SuppressDialogs Then
			appRef.DisplayDialogs = 3 'for PsDialogModes --> 3 (psDisplayNoDialogs)
		Else
			appRef.DisplayDialogs = 2 'for PsDialogModes --> 2 (psDisplayErrorDialogs)
		End If

		'Preparing export settings
		PrepareExportSettings

		Size = CInt(Size)
		
		docLogoRef = null
		If LogoFile<>"" Then
			Set docLogoRef = appRef.Open(ScriptPath & LogoFile)
		End If

		If WorkMode<>"0" Then
			If FrameFile<>"" Then
				Set docFrameRef = appRef.Open(ScriptPath & FrameFile)
			End If
			If (ThumbDifferent) And (FrameFile_Horiz<>"") Then
				Set docFrameRef_Horiz = appRef.Open(ScriptPath & FrameFile_Horiz)
			End If
		End If

		Dim fso2
		Set fso2 = CreateObject("Scripting.FileSystemObject")
		
		If SaveInOneFolder Then
			CreateFolders Path
		End If
		
		Dim curFilePath
		curFilePath = GetFilePath(Files(1))
		cnt = CounterStartValue - 1
		For i = 1 to UBound(Files)
			If IsGraphicFile(Files(i)) Then
					If (SaveInOneFolder) or (GetFilePath(Files(i)) = curFilePath) Then
						cnt = cnt + 1
					Else
						cnt = 1
						curFilePath = GetFilePath(Files(i))
					End If
					PerformAction(i)
			End If
		Next

		If LogoFile<>"" Then
			docLogoRef.Close 2
		End If

		If (WorkMode<>"0") Then
			If FrameFile<>"" Then
				docFrameRef.Close 2
			End If
			If (ThumbDifferent) And (FrameFile_Horiz<>"") Then
				docFrameRef_Horiz.Close 2
			End If
		End If
		
		'Restoring initial Photoshop preferences
		appRef.Preferences.RulerUnits = startRulerUnits
		appRef.Preferences.TypeUnits = startTypeUnits
		appRef.DisplayDialogs = startDisplayDialogs
		
		If Quit Then
			appRef.Quit
		End If
	
	Else
		MsgBox("Ни одного изображения по указанному пути не найдено!")
	End If

End Sub

'Preparing export settings
Sub PrepareExportSettings
	Set exportOptions = CreateObject("Photoshop.ExportOptionsSaveForWeb")
	exportOptions.IncludeProfile = false
	exportOptions.Optimized = true
	exportOptions.Quality = OptimizeQuality
	exportOptions.Format = 6 'for psJPEGSave

	Set jpgSaveOptions = CreateObject("Photoshop.JPEGSaveOptions")
	jpgSaveOptions.EmbedColorProfile = False
	jpgSaveOptions.FormatOptions = 1 'for psStandardBaseline
	jpgSaveOptions.Matte = 4
	jpgSaveOptions.Quality = 12
End Sub

'File processing
Sub PerformAction(i)
	
	fileFullName = Files(i)
	fileName = GetFileName(fileFullName)
	filePath = GetFilePath(fileFullName)

	'Setting up filename
	If LowerCase Then
		fileName = LCase(fileName)
	End If
	If Rename Then
		newFileName = GetNewEnumeratorName(cnt, Digits, RenamePrefix)
	End If
	
	If not(SaveInOneFolder) Then
		CreateFolders filePath
	End If
	
	Set docRef = appRef.Open(fileFullName)

	Width = docRef.Width
	Height = docRef.Height
	AR = Height / Width
	
	'If color space of image is different from RGB, make it RGB
	If docRef.Mode <> 2 Then
		docRef.ChangeMode 2
	End If
	
	docRef.Info.Author = docRef.Info.Author & " [Created using Scripting Gallery by Spirik | sg.spirik.ru] "

	'Saving initial state of processing file
	Set originalState = docRef.ActiveHistoryState

	CreateBigs(i)
	
	If WorkMode<>"0" Then
		CreateThumbs(i)
	End If
	
	docRef.Close 2

	'Deleting source files
	If DeleteOriginals and fso.FileExists(fileFullName) Then	
		Dim file
		Set file = fso.GetFile(fileFullName)
		file.Delete
	End If
	
End Sub

'=====================================================================================================================================
'Creating Bigs - Init
'=====================================================================================================================================

'Creating "Big" output images
'Specific settings substitution and redefinition for creating "Big" images are supposed to be put in this section
Sub CreateBigs(i)

	'Setting Logo position according to source image's aspect ratio
	'(do not forget to uncomment restoring back up in the end of this routine!)
	'Dim backup_Position
	'Dim backup_oDx
	'backup_Position = Position
	'backup_oDx = oDx
	'If AR > 1 Then
	'	Position = 5
	'	oDx = 0
	'End If

	'Choosing directory to save "Big" output images into
	Dim saveDir
	Dim pathVar
	saveDir = b_Folder
	if SaveInOneFolder Then
		pathVar = AddTrailingSlash(Path) & saveDir & "\"
	Else
		pathVar = AddTrailingSlash(filePath) & saveDir & "\"
	End If

	'Checking whether we should rename file
	Dim nameVar
	If Rename Then
		nameVar = newFileName & ".jpg"
	Else
		nameVar = fileName
	End If
	
	'Launching routine for generating and saving "Big" output images
	BigGenerator ResizeMode, Size, pathVar, nameVar, docLogoRef

	'Position = backup_Position
	'oDx = backup_oDx
	
End Sub

'=====================================================================================================================================
'Creating Bigs - Generating
'=====================================================================================================================================

'Processing algorithm for creating "Big" output images: scaling, pasting Logo and saving
Sub BigGenerator(bResizeMode,bSize,path,fname,logoRef)

	'Scaling
	Select Case bResizeMode
		Case 1 'Resize proportionally with widest dimension (whether width or height) downscaled to size specified in Size setting
			If AR < 1 Then
				If bSize<Width Then
					docRef.ResizeImage bSize, bSize*AR, 72, ResizeInterpolationB
				End If
			Else
				If bSize<Height Then
					docRef.ResizeImage bSize / AR, bSize, 72, ResizeInterpolationB
				End If
			End If
		Case 2 'Resized proportionally with height downscaled to size specified in Size setting
			If bSize<Height Then
				docRef.ResizeImage bSize / AR, bSize, 72, ResizeInterpolationB
			End If
		Case 3 'Resized proportionally with width downscaled to size specified in Size setting
			If bSize<Width Then
				docRef.ResizeImage bSize, bSize*AR, 72, ResizeInterpolationB
			End If
	End Select
	If SharpenB Then
		docRef.ActiveLayer.ApplyUnSharpMask SharpenB_USM_Amount, SharpenB_USM_Radius, SharpenB_USM_Threshold
	End If

	
	Dim scaledWidth, scaledHeight
	scaledWidth = docRef.Width
	scaledHeight = docRef.Height

	'Pasting Logo
	If not isNull(logoRef) Then
		'Copying Logo
		appRef.ActiveDocument = logoRef
		docLogoRef.ArtLayers(1).Copy
		appRef.ActiveDocument = docRef
		docRef.Paste
		
		Dim logoRefLayer
		Set logoRefLayer = docRef.ArtLayers(1)
		
		'Pasting Logo in specified position
		Dim dx, dy
		Dim bounds, x0, y0, x1, y1
		bounds = logoRefLayer.Bounds
		x0 = bounds(0)
		y0 = bounds(1)
		x1 = bounds(2)
		y1 = bounds(3)
		dx = (scaledWidth - (x1-x0)) \ 2
		dy = (scaledHeight - (y1-y0)) \ 2
		Select Case Position
			Case 0 'Center
				If docLogoRef.Width > scaledWidth Then
					logoRefLayer.Translate dx-oDx, 0
				End If
			Case 1 'Right-bottom corner
				If docLogoRef.Width > scaledWidth Then
					logoRefLayer.Translate -(docLogoRef.Width-scaledWidth), dy-oDy+1
				Else
					logoRefLayer.Translate dx-oDx, dy-oDy+1
				End If
			Case 2 'Left-bottom corner
				If docLogoRef.Width > scaledWidth Then
					logoRefLayer.Translate 0, dy-oDy+1
				Else
					logoRefLayer.Translate -dx+oDx, dy-oDy+1
				End If
			Case 3 'Left-top corner
				If docLogoRef.Width > scaledWidth Then
					logoRefLayer.Translate 0, -dy+oDy
				Else
					logoRefLayer.Translate -dx+oDx, -dy+oDy
				End If
			Case 4 'Right-top corner
				If docLogoRef.Width > scaledWidth Then
					logoRefLayer.Translate -(docLogoRef.Width-scaledWidth), -dy+oDy
				Else
					logoRefLayer.Translate dx-oDx, -dy+oDy
				End If
			Case 5 'Center-bottom
				If docLogoRef.Width > scaledWidth Then
					logoRefLayer.Translate dx-oDx, dy-oDy+1
				Else
					logoRefLayer.Translate 0, dy-oDy+1
				End If
		End Select
		'Setting up Logo opacity
		logoRefLayer.Opacity = Opacity
	End If

	'Saving "Big" output file
	If Not(SaveOptimized) Then
		docRef.SaveAs path & fname, jpgSaveOptions, True, 2 'for psLowercase
	Else
		docRef.Export path & fname, 2, exportOptions 'for psSaveForWeb
	End If

End Sub

'=====================================================================================================================================
'Creating thumbnails - Init
'=====================================================================================================================================

'Creating thumbnails
'Specific settings substitution and redefinition for creating thumbnails are supposed to be put in this section
Sub CreateThumbs(i)
	
	'Applying vertical indent ThumbDy only for "vertical" source images, e.g. images with aspect ratio > 1
	'(do not forget to uncomment restoring back up in the end of this routine!)
	'Dim backup_ThumbDy
	'backup_ThumbDy = ThumbDy
	'If AR < 1 Then
	'	ThumbDy = -1
	'End If
	
	'Restoring initial state of processing image
	docRef.ActiveHistoryState = originalState

	'Checking whether we should create thumbnails with different sizes according to source image's aspect ratio
	Dim ThumbWidthVar
	Dim ThumbHeightVar
	Dim docFrameRefVar
	docFrameRefVar = null
	If (ThumbDifferent) and (AR <= 1) Then
		ThumbWidthVar = ThumbWidth_Horiz
		ThumbHeightVar = ThumbHeight_Horiz
		If FrameFile_Horiz<>"" Then
			Set docFrameRefVar = docFrameRef_Horiz
		End If
	Else
		ThumbWidthVar = ThumbWidth
		ThumbHeightVar = ThumbHeight
		If FrameFile<>"" Then
			Set docFrameRefVar = docFrameRef
		End If
	End If

	'Choosing directory to save thumbnails into
	Dim saveDir
	Dim pathVar
	saveDir = s_Folder
	if SaveInOneFolder Then
		pathVar = AddTrailingSlash(Path) & saveDir & "\"
	Else
		pathVar = AddTrailingSlash(filePath) & saveDir & "\"
	End If

	'Checking whether we should rename file
	Dim nameVar
	If Rename Then
		nameVar = newFileName & RenameSuffixS & ".jpg"
	Else
		nameVar = ExcludeFileExtension(fileName) & RenameSuffixS & ".jpg"
	End If

	'Launching routine for generating and saving thumbnails
	ThumbnailGenerator ThumbWidthVar,ThumbHeightVar,ThumbScaleFactor,ThumbDy,pathVar,nameVar,docFrameRefVar
	
	'ThumbDy = backup_ThumbDy

End Sub

'=====================================================================================================================================
'Creating thumbnails - Generating
'=====================================================================================================================================

'Processing algorithm for creating thumbnails: cutting from the image, pasting Frame and saving
Sub ThumbnailGenerator(tThumbWidth,tThumbHeight,scaleFactor,tThumbDy,path,fname,frameRef)

	Dim Bnds
	
	If ThumbWideMost Then
		'Proportionally fitting thumbnail into source image
		Dim ARthumb, ratio, tThumbHeightScaled, tThumbWidthScaled
		ARthumb = tThumbHeight / tThumbWidth
		
		If ARthumb < 1 Then
			If ARthumb < AR Then
				ratio = Width / tThumbWidth
			Else
				ratio = Height / tThumbHeight
			End If
		Else
			If ARthumb > AR Then
				ratio = Height / tThumbHeight
			Else
				ratio = Width / tThumbWidth
			End If
		End If

		'Scaling thumbnail and cropping image
		'If indent from the edges is required
		Dim scaleDx, scaleDy
		'If thumbnail is bigger than source image
		If (CInt(tThumbWidth) > CInt(Width)) Or (CInt(tThumbHeight) > CInt(Height)) Then
			scaleFactor = 0 '0%
		End If

		if AR < 1 Then
			scaleDy = scaleFactor * Height
			scaleDx = Round(scaleDy / ARthumb)
			tThumbWidthScaled = tThumbWidth * ratio - scaleDx
			tThumbHeightScaled = tThumbHeight * ratio - scaleDy
		Else
			scaleDx = scaleFactor * Width
			scaleDy = scaleDx * ARthumb
			tThumbWidthScaled = tThumbWidth * ratio - scaleDx
			tThumbHeightScaled = tThumbHeight * ratio - scaleDy
		End If
		
		Dim dx, dy
		dx = (Width - tThumbWidthScaled) \ 2
		'If none vertical indent is needed, than crop from center
		If tThumbDy = -1 Then
			dy = (Height - tThumbHeightScaled) \ 2
		Else
			dy = tThumbDy * (Height - tThumbHeightScaled)
		End If
		
		Bnds = Array(dx, dy, dx+tThumbWidthScaled, dy+tThumbHeightScaled)
		docRef.Crop Bnds

		'Resizing cropped thumbnail to its proper dimensions
		docRef.ResizeImage CInt(tThumbWidth), CInt(tThumbHeight), 72, ResizeInterpolationS
		
		'Sharpen
		If SharpenS Then
			docRef.ActiveLayer.ApplyUnSharpMask SharpenS_USM_Amount, SharpenS_USM_Radius, SharpenS_USM_Threshold
		End If
	Else
		dx = (Width - tThumbWidth) \ 2
		If tThumbDy = -1 Then
			dy = (Height - tThumbHeight) \ 2
		Else
			dy = tThumbDy
		End If
		
		Bnds = Array(dx, dy, dx+tThumbWidth, dy+tThumbHeight)
		docRef.Crop Bnds
	End If

	'Pasting Frame
	If not isNull(frameRef) Then
		appRef.ActiveDocument = frameRef
		frameRef.ArtLayers(1).Copy
		appRef.ActiveDocument = docRef
		docRef.Paste
	End If

	'Saving thumbnail
	If Not(SaveOptimized) Then
		docRef.SaveAs path & fname, jpgSaveOptions, True, 2 'for psLowercase
	Else
		docRef.Export path & fname, 2, exportOptions 'for psSaveForWeb
	End If

End Sub