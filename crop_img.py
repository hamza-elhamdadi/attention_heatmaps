import cv2

# for i in range(1,14):
#     img = cv2.imread(f'gif/{i}.png')
#     print(img.shape)

#     x,y,w,h = 675,250,1600,1200

#     crop_img = img[y:y+h, x:x+w]

#     # cv2.imshow('cropped', crop_img)
#     # cv2.waitKey(0)

#     cv2.imwrite(f'gif_cropped/{i}.png', crop_img)

import imageio
images = []
for i in range(1,26):
    images.append(imageio.imread(f'gif_cropped/{i}.png'))
imageio.mimsave('tutorial.gif', images)