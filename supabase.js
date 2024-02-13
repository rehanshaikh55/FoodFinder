import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://bzktjpqeqnhbaonmjqox.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6a3RqcHFlcW5oYmFvbm1qcW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDA2NDQsImV4cCI6MjAyMzQxNjY0NH0.oY0dI-NHLhRgUu9MqIq5la51cG4NBXayDNitgnDP0Jk"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)